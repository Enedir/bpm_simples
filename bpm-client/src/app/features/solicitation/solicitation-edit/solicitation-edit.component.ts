import { Solicitation, SolicitationCommandUpdate } from './../shrared/solicitation.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';

import { SolicitationService } from '../shrared/solicitation.service';
import { takeUntil, take } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-solicitation-edit',
  templateUrl: './solicitation-edit.component.html',
  styleUrls: ['./solicitation-edit.component.sass']
})
export class SolicitationEditComponent implements OnInit, OnDestroy {

  public solicitation: Solicitation;
  public onChanges: Solicitation;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formModel: FormGroup = this.fb.group({
    id: ['', Validators.required],
    nameApplicant: ['', Validators.required],
    itemDescription: ['', [Validators.required]],
    productValue: [0.00, [Validators.required]],
  });

  constructor(private fb: FormBuilder, 
    private solicitationServ: SolicitationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.data.key.subscribe((solicitation: Solicitation) => {
      this.solicitation = Object.assign(new Solicitation(), solicitation);
      this.formModel.setValue({
        id: this.solicitation.id,
        nameApplicant: this.solicitation.nameApplicant,
        itemDescription: this.solicitation.itemDescription,
        productValue: this.solicitation.productValue,
      });
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

  public redirect(): void {
    this.router.navigate(['/'], { relativeTo: this.route });
   }
   public onEdit(event: Event): void {
    const command: SolicitationCommandUpdate = Object.assign(new SolicitationCommandUpdate(), this.formModel.value);
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
