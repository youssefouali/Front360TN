import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMealsComponent } from './plan-meals.component';

describe('PlanMealsComponent', () => {
  let component: PlanMealsComponent;
  let fixture: ComponentFixture<PlanMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
