import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { take } from 'rxjs/operators';

import { SolicitationService } from '../shared/solicitation.service';
import { SolicitationCommandRegister } from '../shared/solicitation.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './solicitation-creator.component.html',
  styleUrls: ['./solicitation-creator.component.scss']
})
export class SolicitationCreatorComponent {


  constructor(private fb: FormBuilder, private solicitationServ: SolicitationService,
    private router: Router,
    private route: ActivatedRoute) { }

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
    const command: SolicitationCommandRegister = Object.assign(new SolicitationCommandRegister(), this.formModel.value);
    this.solicitationServ.post(command)
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
