import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanStyleListComponent } from './plan-style-list.component';

describe('PlanStyleListComponent', () => {
  let component: PlanStyleListComponent;
  let fixture: ComponentFixture<PlanStyleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanStyleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanStyleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
