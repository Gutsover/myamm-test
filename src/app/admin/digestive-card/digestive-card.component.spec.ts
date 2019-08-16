import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigestiveCardComponent } from './digestive-card.component';

describe('DigestiveCardComponent', () => {
  let component: DigestiveCardComponent;
  let fixture: ComponentFixture<DigestiveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigestiveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigestiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
