import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationCreatorComponent } from './solicitation-creator.component';

describe('SolicitationCreatorComponent', () => {
  let component: SolicitationCreatorComponent;
  let fixture: ComponentFixture<SolicitationCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitationCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
