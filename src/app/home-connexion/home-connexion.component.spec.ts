import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConnexionComponent } from './home-connexion.component';

describe('HomeConnexionComponent', () => {
  let component: HomeConnexionComponent;
  let fixture: ComponentFixture<HomeConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
