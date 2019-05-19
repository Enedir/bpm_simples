import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CurrencyMaskModule,
  ],
  exports: [
    ReactiveFormsModule,
    NgxSpinnerModule,
    CurrencyMaskModule,
  ]
})
export class SharedModule { }
