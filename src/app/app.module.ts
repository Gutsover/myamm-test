import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeConnexionComponent } from './home-connexion/home-connexion.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ViewMealComponent } from './layout/view-meal/view-meal.component';
import { MealCardComponent } from './admin/meal-card/meal-card.component';

import { ViewDashboardComponent } from './layout/view-dashboard/view-dashboard.component';
import { ViewDessertComponent } from './layout/view-dessert/view-dessert.component';
import { ViewAlcoolComponent } from './layout/view-alcool/view-alcool.component';
import { ViewSoftComponent } from './layout/view-soft/view-soft.component';
import { ViewUserComponent } from './layout/view-user/view-user.component';
import { ModalCardComponent } from './user/modal-card/modal-card.component';
import { CreateUserCardComponent } from './admin/create-user-card/create-user-card.component';
import { AddUserComponent } from './layout/add-user/add-user.component';

// Import des Services:
import { MealService } from './services/meal.service';
import { DessertService } from './services/dessert.service';
import { AlcoolService } from './services/alcool.service';
import { SoftService } from './services/soft.service';
import { UserFoodService } from './services/user-food.service';
import { AuthService } from './services/auth.service';
import { UtilisateurService } from './services/utilisateur.service';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeConnexionComponent},
  { path: 'dashboard', canActivate: [AuthGuard], component: ViewDashboardComponent},
  { path: 'plats', canActivate: [AuthGuard], component: ViewMealComponent},
  { path: 'desserts', canActivate: [AuthGuard], component: ViewDessertComponent},
  { path: 'alcool', canActivate: [AuthGuard], component: ViewAlcoolComponent},
  { path: 'soft', canActivate: [AuthGuard], component: ViewSoftComponent},
  { path: 'new-user', canActivate: [AuthGuard], component: AddUserComponent},
  { path: 'user', canActivate: [AuthGuard], component: ViewUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeConnexionComponent,
    SidebarComponent,
    ViewMealComponent,
    MealCardComponent,
    ViewDashboardComponent,
    ViewDessertComponent,
    ViewAlcoolComponent,
    ViewSoftComponent,
    ViewUserComponent,
    ModalCardComponent,
    CreateUserCardComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MealService,
    DessertService,
    AlcoolService,
    SoftService,
    UserFoodService,
    AuthService,
    UtilisateurService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
