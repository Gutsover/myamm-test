import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCardDashboardComponent } from './profil-card-dashboard.component';

describe('ProfilCardDashboardComponent', () => {
  let component: ProfilCardDashboardComponent;
  let fixture: ComponentFixture<ProfilCardDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCardDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
