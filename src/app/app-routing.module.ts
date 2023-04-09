import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/component/carts/carts.component';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { DetailsComponent } from './products/component/details/details.component';

const routes: Routes = [
  {path: "Home", component: AllProductsComponent},
  {path: "Carts", component: CartsComponent},
  {path: "Details/:id", component: DetailsComponent},
  {path: "**", redirectTo: "Home",pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
