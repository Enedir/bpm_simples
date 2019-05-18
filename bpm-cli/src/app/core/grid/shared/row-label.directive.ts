import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[bpmRowLabel]'
})
export class RowLabelDirective {

  constructor(private _elemRef: ElementRef, private _renderer: Renderer) {
     this._renderer.setElementAttribute(this._elemRef.nativeElement, 'data-label', this.labelText);
  }

// tslint:disable-next-line: no-input-rename
  @Input('bpmRowLabelText') labelText: string;
}
