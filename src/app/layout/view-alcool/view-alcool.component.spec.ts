import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlcoolComponent } from './view-alcool.component';

describe('ViewAlcoolComponent', () => {
  let component: ViewAlcoolComponent;
  let fixture: ComponentFixture<ViewAlcoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAlcoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlcoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
