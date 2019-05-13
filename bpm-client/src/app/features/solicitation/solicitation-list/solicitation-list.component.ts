import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { SolicitationService } from '../shrared/solicitation.service';
import { Solicitation } from './../shrared/solicitation.model';


@Component({
  templateUrl: './solicitation-list.component.html',
  styleUrls: ['./solicitation-list.component.sass']
})
export class SolicitationListComponent implements OnInit {

  solicitations: Solicitation[];
  headers: string[];
  columns: string[];

  constructor( private router: Router, private route: ActivatedRoute, private service: SolicitationService) { }

  ngOnInit() {
    this.headers = ["Solicitante", "Item", "Valor", "Situação"];
    this.columns = ["nameApplicant", "itemDescription", "productValue", "isApproved"];

    this.service.getAll()
      .pipe(take(1))
      .subscribe((response) => {
        this.solicitations = response;
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

  private onCrete(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  private onClickRow(row: Solicitation): void {
    this.router.navigate(['./edit', `${row.id}`], { relativeTo: this.route });
  }

}
