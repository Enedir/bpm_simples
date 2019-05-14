import { Solicitation, SolicitationCommandUpdate } from './../shrared/solicitation.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { takeUntil, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { SolicitationService } from '../shrared/solicitation.service';


@Component({
  templateUrl: './solicitation-edit.component.html',
  styleUrls: ['./solicitation-edit.component.sass']
})
export class SolicitationEditComponent implements OnInit {

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public solicitation: Solicitation;

  public formModel: FormGroup = this.fb.group({
    id: ['', Validators.required],
    nameApplicant: ['', Validators.required],
    itemDescription: ['', [Validators.required]],
    productValue: [0.00, [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private solicitationServ: SolicitationService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  public ngOnInit(): void {

    this.route.data.pipe(takeUntil(this.ngUnsubscribe)).subscribe((response) => {
      this.solicitation = Object.assign(new Solicitation(), response.solicitation);
      this.formModel.setValue({
        id: this.solicitation.id,
        nameApplicant: this.solicitation.nameApplicant,
        itemDescription: this.solicitation.itemDescription,
        productValue: this.solicitation.productValue,
      });
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
  public onEdit(event: Event): void {
    const command: SolicitationCommandUpdate = Object.assign(new SolicitationCommandUpdate(this.solicitation.id), this.formModel.value);
    this.solicitationServ.put(command)
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
