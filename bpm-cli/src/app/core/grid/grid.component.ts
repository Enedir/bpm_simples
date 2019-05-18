import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GridOption } from './shared/grid.model';

@Component({
  selector: 'bpm-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() options: GridOption[];
  @Input() dataReader: any[];

  @Output() selectEvent = new EventEmitter();

  onSelect(data: any): void {
    this.selectEvent.emit(data);
  }

}
