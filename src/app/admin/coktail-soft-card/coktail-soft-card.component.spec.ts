import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoktailSoftCardComponent } from './coktail-soft-card.component';

describe('CoktailSoftCardComponent', () => {
  let component: CoktailSoftCardComponent;
  let fixture: ComponentFixture<CoktailSoftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoktailSoftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoktailSoftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
