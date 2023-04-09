import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { DetailsComponent } from './component/details/details.component';
import { ItemBoxComponent } from './component/item-box/item-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    DetailsComponent,
    ItemBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AllProductsComponent
  ]

})
export class ProductsModule { }
