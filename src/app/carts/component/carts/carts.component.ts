import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent {
  addDataToCart: any[] = [];
  total: any = 0;
  success: boolean = false;
  constructor(private service: CartService){

  }
  ngOnInit(){
    this.getDataFromStorage();
  }
  getDataFromStorage(){
    if("carts" in localStorage){
      this.addDataToCart = JSON.parse(localStorage.getItem("carts")!);
    }
    console.log(this.addDataToCart);
    this.getTotal();
  }
  getTotal(){
  this.total = 0;
  for(let i in this.addDataToCart){
    this.total +=  this.addDataToCart[i].item.price * this.addDataToCart[i].quantity; 
  }
  }
  minsProducts(index: number){
    this.addDataToCart[index].quantity--;
    this.getTotal();
    localStorage.setItem("carts", JSON.stringify(this.addDataToCart));  }
  addProducts(index: number){
    this.addDataToCart[index].quantity++;
    this.getTotal();
    localStorage.setItem("carts", JSON.stringify(this.addDataToCart));  }
    changeItem(){
      this.getTotal();
      localStorage.setItem("carts", JSON.stringify(this.addDataToCart));  
    }
    deletProduct(index: number){
      this.addDataToCart.splice(index, 1);
      this.getTotal();
      localStorage.setItem("carts", JSON.stringify(this.addDataToCart));  
    }
    clearData(){
      this.addDataToCart = [];
      this.getTotal();
      localStorage.setItem("carts", JSON.stringify(this.addDataToCart));  
    }

    sendDataToCart(){
      let products = this.addDataToCart.map(item => {
        return {productId: item.item.id, quantity: item.quantity}
      })
      let mode = {
        userId: 5,
        date: new Date(),
        products: products
      }
      this.service.allCarts(mode).subscribe((data: any) => {
        this.success = true;
      })
    }
    }

