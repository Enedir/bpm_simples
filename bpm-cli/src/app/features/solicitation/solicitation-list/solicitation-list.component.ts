import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { GridOption } from './../../../core/grid/shared/grid.model';

import { Solicitation } from '../shared/solicitation.model';
import { SolicitationService } from '../shared/solicitation.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './solicitation-list.component.html',
  styleUrls: ['./solicitation-list.component.scss']
})
export class SolicitationListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: SolicitationService) {}

  gridOptions: GridOption[];
  data: Solicitation[];

  private solicitationSelected: Solicitation;

  ngOnInit() {
    this.setGridOption();
    this.refresh();
  }

  public onItemSelect(selected: Solicitation) {
    this.solicitationSelected = selected;
  }

  private setGridOption(): void {

    const country = 'INR';

    this.gridOptions = [
      {
        header: 'Solicitante',
        field:  'nameApplicant',
        pipe:  ''
      },
      {
        header: 'Item da Solicitação',
        field:  'itemDescription',
        pipe:  ''
      },
      {
        header: 'Valor do Produção',
        field: 'productValue',
        //pipe: ' | currency: \'BRL\':true:\'1.2-2\''
        pipe:  ''
      },
      {
        header: 'Situação',
        field: 'isApproved',
        pipe: ''
      },

    ];
  }

  private refresh(): void {

    this.service.getAll()
      .pipe(take(1))
      .subscribe((response) => {
        this.data = response;
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

  private onApprove(): void {

    if (this.solicitationSelected != null) {
      this.router.navigate(['./approve', `${this.solicitationSelected.id}`], { relativeTo: this.route });
    }
    else {
      alert("Selecione uma solicitação para poder aprová la.");
    }
  }

  private onDelete(): void {

    if (this.solicitationSelected != null) {
      this.service.delete(this.solicitationSelected.id)
        .pipe(take(1))
        .subscribe((response) => {
          this.refresh();
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
    else {
      alert("Selecione uma solicitação para poder deletar.");
    }

  }
}
