import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoktailCardComponent } from './coktail-card.component';

describe('CoktailCardComponent', () => {
  let component: CoktailCardComponent;
  let fixture: ComponentFixture<CoktailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoktailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoktailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
