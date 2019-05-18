import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LOCALE_ID} from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { RowLabelDirective } from './grid/shared/row-label.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [GridComponent, RowLabelDirective],
  exports: [GridComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'BRL'
    }
]
})
export class CoreModule {}
