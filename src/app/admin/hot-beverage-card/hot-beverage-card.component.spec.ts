import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotBeverageCardComponent } from './hot-beverage-card.component';

describe('HotBeverageCardComponent', () => {
  let component: HotBeverageCardComponent;
  let fixture: ComponentFixture<HotBeverageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotBeverageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotBeverageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
