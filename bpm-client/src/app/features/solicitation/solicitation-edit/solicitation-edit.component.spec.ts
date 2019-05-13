import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationEditComponent } from './solicitation-edit.component';

describe('SolicitationEditComponent', () => {
  let component: SolicitationEditComponent;
  let fixture: ComponentFixture<SolicitationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
