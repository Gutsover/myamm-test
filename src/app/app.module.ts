import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeConnexionComponent } from './home-connexion/home-connexion.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ViewMealComponent } from './layout/view-meal/view-meal.component';
import { MealCardComponent } from './admin/meal-card/meal-card.component';

// Import des Services:
import { MealService } from './services/meal.service';
import { ViewDashboardComponent } from './layout/view-dashboard/view-dashboard.component';
import { ViewDessertComponent } from './layout/view-dessert/view-dessert.component';
import { ViewAlcoolComponent } from './layout/view-alcool/view-alcool.component';
import { ViewSoftComponent } from './layout/view-soft/view-soft.component';


const routes: Routes = [
  { path: '', component: HomeConnexionComponent},
  // { path: 'dashboard', component: ViewDashboardComponent},
  { path: 'plats', component: ViewMealComponent},
  { path: 'desserts', component: ViewDessertComponent},
  { path: 'alcool', component: ViewAlcoolComponent},
  { path: 'soft', component: ViewSoftComponent}
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
    ViewSoftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MealService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
