import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { FaveProductComponent } from './fave-product/fave-product.component';
import { HistoriqueCComponent } from './historique-c/historique-c.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitComponent } from './produit/produit.component';
import { RegisterComponent } from './register/register.component';
import { DealsComponent } from './deals/deals.component';
import { RecetteDetailsComponent } from './recette-details/recette-details.component';
import { RecetteHomeComponent } from './recette-home/recette-home.component';
import { PlansComponent } from './plans/plans.component';
import { PlanMealsComponent } from './plan-meals/plan-meals.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FoodProductsComponent } from './food-products/food-products.component';
import { KitchenComponent } from './kitchen/kitchen.component';


@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path:"acceuil", component:AcceuilComponent},
      {path:"produitList", component:ProduitListComponent},
      {path:"produit", component:ProduitComponent},
      {path:"register",component:RegisterComponent},
      {path:"login",component:LoginComponent},
      {path:"historique",component:HistoriqueCComponent},
      {path:"panier",component:PanierComponent},
      {path:"fave",component:FaveProductComponent},
      {path:"deals",component:DealsComponent},
      {path:"recetteDetails",component:RecetteDetailsComponent},
      {path:"recetteHome",component:RecetteHomeComponent},
      {path:"plans",component:PlansComponent},
      {path:"plan-meals",component:PlanMealsComponent},
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'user', component: BoardUserComponent },
      { path: 'admin', component: BoardAdminComponent },
      { path: 'food-products', component: FoodProductsComponent },
      { path: 'kitchen', component: KitchenComponent },


    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
