import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { SolicitationService } from '../shared/solicitation.service';
import { SolicitationCommandRegister } from '../shared/solicitation.model';
import { HttpErrorResponse } from '@angular/common/http';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: './solicitation-creator.component.html',
  styleUrls: ['./solicitation-creator.component.scss']
})
export class SolicitationCreatorComponent {


  constructor(
    private fb: FormBuilder,
    private solicitationServ: SolicitationService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  public submit: EventEmitter<FormGroup>;
  public formModel: FormGroup = this.fb.group({
    nameApplicant: ['', Validators.required],
    itemDescription: ['', [Validators.required]],
    productValue: [0.00, [Validators.required]],
  });

  public redirect(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  public onCreate(event: Event): void {
    this.spinner.show();
    const command: SolicitationCommandRegister = Object.assign(new SolicitationCommandRegister(), this.formModel.value);
    this.solicitationServ.post(command)
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
