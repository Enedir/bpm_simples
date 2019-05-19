import { FilterOption } from './shared/filter.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bpm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor() {}

  @Input() options: FilterOption[];
  @Input() dataReader: any[];

  @Output() filterSearchEvent = new EventEmitter();
  @Output() filterClearEvent = new EventEmitter();

  currentFilter: FilterOption;
  value: string;
  key: string;

  ngOnInit() {
    this.currentFilter = new FilterOption();
  }

  onChange($event): void {
    this.currentFilter  = this.options.find(x => x.key === this.key);
  }

  onFilter(): void {
    let result: any[];

    if ( this.currentFilter.hasValue) {
      result = this.dataReader.filter(x => x[this.key] ===  this.currentFilter.value);
    } else {
      result = this.dataReader.filter(x => x[this.key] === this.value);
    }

   this.filterSearchEvent.emit(result);
  }

  onClear(): void {
    this.value = '';
    this.filterClearEvent.emit();
  }
}
