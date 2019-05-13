import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bpm-solicitation-form',
  templateUrl: './solicitation-form.component.html',
  styleUrls: ['./solicitation-form.component.sass']
})
export class SolicitationFormComponent {

  @Input() public formModel: FormGroup;

}
