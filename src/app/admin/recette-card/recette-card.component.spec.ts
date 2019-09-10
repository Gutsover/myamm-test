import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCardComponent } from './recette-card.component';

describe('RecetteCardComponent', () => {
  let component: RecetteCardComponent;
  let fixture: ComponentFixture<RecetteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
