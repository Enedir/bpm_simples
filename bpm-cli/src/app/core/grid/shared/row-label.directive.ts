import { IGridOption } from './grid.model';
import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bpmRowLabel]'
})
export class RowLabelDirective implements OnInit {

  constructor(private _elemRef: ElementRef, private _renderer: Renderer) {
  }

// tslint:disable-next-line: no-input-rename
  @Input('bpmRowOption') params: IGridOption;

  ngOnInit(): void {
    this._renderer.setElementAttribute(this._elemRef.nativeElement, 'data-label', this.params.header);
  }
}
