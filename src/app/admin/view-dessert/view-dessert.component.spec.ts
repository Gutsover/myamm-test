import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDessertComponent } from './view-dessert.component';

describe('ViewDessertComponent', () => {
  let component: ViewDessertComponent;
  let fixture: ComponentFixture<ViewDessertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDessertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
