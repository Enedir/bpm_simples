import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { GridOption } from './../../../core/grid/shared/grid.model';

import { Solicitation } from '../shared/solicitation.model';
import { SolicitationService } from '../shared/solicitation.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bpm-solicitation-list',
  templateUrl: './solicitation-list.component.html',
  styleUrls: ['./solicitation-list.component.scss']
})
export class SolicitationListComponent implements OnInit {

  gridOptions: GridOption[];
  data: Solicitation[];

  private solicitation: Solicitation;

  constructor(private router: Router, private route: ActivatedRoute, private service: SolicitationService) {}

  ngOnInit() {
    this.setGridOption();
    this.refresh();
  }

  private setGridOption(): void {
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
        pipe: ''
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
}
