import { Component } from '@angular/core';
import { product } from '../../module/products';
import { ProductsService } from '../../servcie/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  allProducts: product[]  = [];
  allCategories: string[] = [];
  loading: boolean = false;
  addDataToCart: any[] = [];
  constructor(private service: ProductsService){

  }
  ngOnInit(){
    this.getAllItem();
    this.getCategories();
  }

      getAllItem(){
        this.loading = true;
        this.service.getAllProduct().subscribe((data: any) => {       
          this.allProducts = data;
          this.loading = false;
        }, error => {
          this.loading = false;
          console.log(error.message)});
      }
      getCategories(){
        this.loading = true;
        this.service.getAllCategoris().subscribe((data: any) => {          
          this.allCategories = data;
          this.loading = false;
        }, error => {
          this.loading = false;
          console.log(error.message)})
      }
      getValue(event: any){
        let value = event.target.value;
        (value === "all" ) ? this.getAllItem() : this.getSpecficItem(value); 
        
      }
      getSpecficItem(keyword: any){
        this.loading = true;
        this.service.getSpecificCategory(keyword).subscribe((data: any) => {        
          this.allProducts =  data;
          this.loading = false;
        }, error => {
          this.loading = false;
          console.log(error.message)})
      }
      addCarts(event: any){
        if("carts" in localStorage){
          this.addDataToCart = JSON.parse(localStorage.getItem("carts")!);
          let exist = this.addDataToCart.find(item => item.item.id === event.item.id)
          if(exist){
            alert("Product is alrady in your Cart");
          }else{
          this.addDataToCart.push(event);
          localStorage.setItem("carts", JSON.stringify(this.addDataToCart));
          }
          
        }else{
          this.addDataToCart.push(event);
          localStorage.setItem("carts", JSON.stringify(this.addDataToCart));
        }
       
      }
 
}

