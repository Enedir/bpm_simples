import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LOCALE_ID} from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { RowLabelDirective } from './grid/shared/row-label.directive';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,  FormsModule  ],
  declarations: [GridComponent, RowLabelDirective, FilterComponent],
  exports: [GridComponent,FilterComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'BRL'
    }
]
})
export class CoreModule {}
