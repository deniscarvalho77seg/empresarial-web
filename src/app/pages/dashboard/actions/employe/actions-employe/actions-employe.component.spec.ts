import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsEmployeComponent } from './actions-employe.component';

describe('ActionsEmployeComponent', () => {
  let component: ActionsEmployeComponent;
  let fixture: ComponentFixture<ActionsEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
