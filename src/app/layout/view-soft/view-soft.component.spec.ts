import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSoftComponent } from './view-soft.component';

describe('ViewSoftComponent', () => {
  let component: ViewSoftComponent;
  let fixture: ComponentFixture<ViewSoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
