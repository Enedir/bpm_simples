import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { RowLabelDirective } from './grid/shared/row-label.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [GridComponent, RowLabelDirective],
  exports: [GridComponent]
})
export class CoreModule {}
