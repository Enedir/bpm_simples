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

  key: string;

  filters = [
    {
      name: "Aprovados",
      key: "APPROVED"
    },
    {
      name: "Reprovados",
      key: "REPROVED",

    },
    {
      name: " nome do solicitante ",
      key: "nameApplicant",

    },
    {
      name: "descrição do item",
      key: "itemDescription",

    }
  ];

  private solicitation: Solicitation;


  constructor(private router: Router, private route: ActivatedRoute, private service: SolicitationService) { }

  ngOnInit() {
    this.headers = ["Solicitante", "Item", "Valor", "Situação"];
    this.columns = ["nameApplicant", "itemDescription", "productValue", "isApproved"];

    this.refresh();

  }

  private refresh(): void {

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

  private onSelect(row: Solicitation): void {
    this.solicitation = row;
  }

  private onApprove(): void {

    if (this.solicitation != null) {
      this.router.navigate(['./approve', `${this.solicitation.id}`], { relativeTo: this.route });
    }
    else {
      alert("Selecione uma solicitação para poder aprová la.");
    }
  }

  private onDelete(): void {

    if (this.solicitation != null) {
      this.service.delete(this.solicitation.id)
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

  private onFilter(): void {
    console.log(this.key);

    // switch (this.currentiFlter.key) {
    //   case "APPROVED":
    //     this.solicitations = this.solicitations.filter(x => x.isApproved === "APPROVED");
    //     break;

    //   case "REPROVED":
    //     this.solicitations = this.solicitations.filter(x => x.isApproved === "REPROVED");
    //     break;

    //   case "nameApplicant":
    //     this.solicitations = this.solicitations.filter(x => x.nameApplicant === this.currentiFlter.value);
    //     break;

    //   case "itemDescription":
    //     this.solicitations = this.solicitations.filter(x => x.itemDescription === this.currentiFlter.value);
    //     break;

    // }
  }

  private onClear(): void {
    this.refresh();
  }

}
