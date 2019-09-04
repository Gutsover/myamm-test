import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTestComponent } from './food-test.component';

describe('FoodTestComponent', () => {
  let component: FoodTestComponent;
  let fixture: ComponentFixture<FoodTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
