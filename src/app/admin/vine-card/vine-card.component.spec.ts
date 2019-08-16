import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VineCardComponent } from './vine-card.component';

describe('VineCardComponent', () => {
  let component: VineCardComponent;
  let fixture: ComponentFixture<VineCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VineCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
