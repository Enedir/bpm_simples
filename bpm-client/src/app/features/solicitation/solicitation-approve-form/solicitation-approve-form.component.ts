import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Solicitation } from '../shrared/solicitation.model';

@Component({
  selector: 'bpm-solicitation-approve-form',
  templateUrl: './solicitation-approve-form.component.html',
})
export class SolicitationApproveFormComponent  {

  @Input() public formModel: FormGroup;

  @Input() public solicitation: Solicitation;

  @Input() public itens: any;

}
