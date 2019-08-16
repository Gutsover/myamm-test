import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeCardComponent } from './entree-card.component';

describe('EntreeCardComponent', () => {
  let component: EntreeCardComponent;
  let fixture: ComponentFixture<EntreeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
