import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { RecetteComponent } from './recette/recette.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { CategorieServiceService } from './categorie-service.service';
import { HttpClientModule } from '@angular/common/http';
import { TopcatComponent } from './topcat/topcat.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { FilterPipe } from './filter.pipe';
import { PubComponent } from './pub/pub.component';
import { ProduitComponent } from './produit/produit.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartserviceService } from './cartservice.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HistoriqueCComponent } from './historique-c/historique-c.component';
import { PanierComponent } from './panier/panier.component';
import { FaveProductComponent } from './fave-product/fave-product.component';
import { DealsComponent } from './deals/deals.component';
import { RecetteDetailsComponent } from './recette-details/recette-details.component';
import { RecetteHomeComponent } from './recette-home/recette-home.component';
import { PlansComponent } from './plans/plans.component';
import { PlanMealsComponent } from './plan-meals/plan-meals.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FoodProductsComponent } from './food-products/food-products.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { PlanStyleListComponent } from './plan-style-list/plan-style-list.component';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    FooterComponent,
    RecetteComponent,
    CategorieComponent,
    NextDirective,
    PrevDirective,
    TopcatComponent,
    ProduitListComponent,
    FilterPipe,
    PubComponent,
    ProduitComponent,
    RegisterComponent,
    LoginComponent,
    HistoriqueCComponent,
    PanierComponent,
    FaveProductComponent,
    DealsComponent,
    RecetteDetailsComponent,
    RecetteHomeComponent,
    PlansComponent,
    PlanMealsComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    FoodProductsComponent,
    KitchenComponent,
    PlanStyleListComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [CategorieServiceService, CartserviceService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
