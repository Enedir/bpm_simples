import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { takeUntil, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { SolicitationService } from '../shared/solicitation.service';
import { Solicitation, SolicitationCommandApprove } from '../shared/solicitation.model';
import { SolicitationValidator } from '../shared/solicitation.validator';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: './solicitation-approve.component.html',
  styleUrls: ['./solicitation-approve.component.scss']
})
export class SolicitationApproveComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private solicitationServ: SolicitationService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public solicitation: Solicitation;

  public formModel: FormGroup = this.fb.group({
    isApproved: [null, Validators.required],
    observation: [''],
  }, { validator: SolicitationValidator });

  public itens = [
    {
      name: 'Aprovado',
      value: 'APROVADO'
    },
    {
      name: 'Reprovado',
      value: 'REPROVADO'
    }
  ];

  ngOnInit() {
    this.route.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe((response) => {
      this.solicitation = Object.assign(new Solicitation(), response.solicitation);
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
        alert('Aconteceu um erro:' + err.error.message);
        this.spinner.hide();
      } else {
        // Backend returns unsuccessful response codes such as 404, 500 etc.
        alert('Aconteceu um erro: status ->  ' +  err.status + 'mensagem de erro -> ' + err.error);
        // Log errors if any
        this.spinner.hide();
      }
    });
  }

  public redirect(): void {
    this.router.navigate(['/'], { relativeTo: this.route });
  }

  public onApprove(event: Event): void {
    this.spinner.show();
    const command: SolicitationCommandApprove = Object.assign(new SolicitationCommandApprove(this.solicitation.id), this.formModel.value);
    this.solicitationServ.patch(command)
      .pipe(take(1))
      .subscribe((x: any) => {
        setTimeout(() => {
          this.spinner.hide();
          this.redirect();
      }, 200);
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          this.spinner.hide();
          alert('Aconteceu um erro:' + err.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          alert('Aconteceu um erro: status ->  ' +  err.status + 'mensagem de erro -> ' + err.error);
          this.spinner.hide();
          // Log errors if any
        }
      });
  }

}
