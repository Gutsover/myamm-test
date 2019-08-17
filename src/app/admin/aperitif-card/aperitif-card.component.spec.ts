import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitifCardComponent } from './aperitif-card.component';

describe('AperitifCardComponent', () => {
  let component: AperitifCardComponent;
  let fixture: ComponentFixture<AperitifCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperitifCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperitifCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
