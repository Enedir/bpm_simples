import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationApproveFormComponent } from './solicitation-approve-form.component';

describe('SolicitationApproveFormComponent', () => {
  let component: SolicitationApproveFormComponent;
  let fixture: ComponentFixture<SolicitationApproveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitationApproveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationApproveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
