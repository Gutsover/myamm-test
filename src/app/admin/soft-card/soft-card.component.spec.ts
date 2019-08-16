import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftCardComponent } from './soft-card.component';

describe('SoftCardComponent', () => {
  let component: SoftCardComponent;
  let fixture: ComponentFixture<SoftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
