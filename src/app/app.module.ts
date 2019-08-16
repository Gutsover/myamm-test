import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeConnexionComponent } from './home-connexion/home-connexion.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { ViewDashboardComponent } from './admin/view-dashboard/view-dashboard.component';
import { ViewMealComponent } from './admin/view-meal/view-meal.component';
import { ViewDessertComponent } from './admin/view-dessert/view-dessert.component';
import { ViewAlcoolComponent } from './admin/view-alcool/view-alcool.component';
import { ViewSoftComponent } from './admin/view-soft/view-soft.component';

import { Routes, RouterModule} from '@angular/router';
import { FoodCardComponent } from './admin/food-card/food-card.component';
import { EntreeCardComponent } from './admin/entree-card/entree-card.component';
import { MenuCardComponent } from './admin/menu-card/menu-card.component';
import { DessertCardComponent } from './admin/dessert-card/dessert-card.component';


// Création de mes routes:
const routes: Routes = [
  { path: 'dashboard', component: ViewDashboardComponent},
  { path: 'plats', component: ViewMealComponent},
  { path: 'desserts', component: ViewDessertComponent},
  { path: 'alcool', component: ViewAlcoolComponent},
  { path: 'soft', component: ViewSoftComponent}
];

// NgModule = décorateur, fonctionnalité TS permettant d'apporter un traiment à une classe lors de la compilation
@NgModule({
  // déclarations: ajoute les components créés mais aussi les pipes, directives...
  declarations: [
    AppComponent,
    FooterComponent,
    HomeConnexionComponent,
    SidenavComponent,
    ViewDashboardComponent,
    ViewMealComponent,
    ViewDessertComponent,
    ViewAlcoolComponent,
    ViewSoftComponent,
    FoodCardComponent,
    EntreeCardComponent,
    MenuCardComponent,
    DessertCardComponent
  ],

  // Imports: importe les autres modules utiles à l'appli
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Directive = classe qui associe un comportement particulier à un élmt du DOM : component, direct. structurelle & direct. d'attribut

// Direct. structurelles: syntaxe: *ngFor, *ngIf, *ngSwitch...

// Direct. d'attributs: ngStyle, ngClass

// Pipes: fonction qui retourne un output a partir d'un input et qui peut être déclérée ds le template
