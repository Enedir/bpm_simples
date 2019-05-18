import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationApproveComponent } from './solicitation-approve.component';

describe('SolicitationApproveComponent', () => {
  let component: SolicitationApproveComponent;
  let fixture: ComponentFixture<SolicitationApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitationApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
