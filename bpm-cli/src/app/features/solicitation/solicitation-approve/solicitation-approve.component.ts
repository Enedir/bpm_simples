import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { takeUntil, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { SolicitationService } from '../shared/solicitation.service';
import { Solicitation, SolicitationCommandApprove } from '../shared/solicitation.model';
import { SolicitationValidator } from '../shared/solicitation.validator';

@Component({
  templateUrl: './solicitation-approve.component.html',
  styleUrls: ['./solicitation-approve.component.scss']
})
export class SolicitationApproveComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private solicitationServ: SolicitationService,
    private router: Router,
    private route: ActivatedRoute) { }

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public solicitation: Solicitation;

  public formModel: FormGroup = this.fb.group({
    isApproved: [null, Validators.required],
    observation: [''],
  }, { validator: SolicitationValidator });

  public itens = [
    {
      name: 'Aprovado',
      value: 'APPROVED'
    },
    {
      name: 'Reprovado',
      value: 'REPROVED'
    }
  ];

  ngOnInit() {
    this.route.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe((response) => {
      this.solicitation = Object.assign(new Solicitation(), response.solicitation);
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
        console.log('An error occurred:', err.error.message);
      } else {
        // Backend returns unsuccessful response codes such as 404, 500 etc.
        console.log('Backend returned status code: ', err.status);
        console.log('Response body:', err.error);
        // Log errors if any
      }
    });
  }

  public redirect(): void {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  public onApprove(event: Event): void {
    const command: SolicitationCommandApprove = Object.assign(new SolicitationCommandApprove(this.solicitation.id), this.formModel.value);
    this.solicitationServ.patch(command)
      .pipe(take(1))
      .subscribe((x: any) => {
        this.redirect();
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
          // Log errors if any
        }
      });
  }

}
