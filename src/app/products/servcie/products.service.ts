import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProduct(){
  return  this.http.get("https://fakestoreapi.com/products")
  }
  getAllCategoris(){
    return  this.http.get("https://fakestoreapi.com/products/categories")
  }
  getSpecificCategory(keyword: any){
    return  this.http.get("https://fakestoreapi.com/products/category/"+keyword)
  }
  getSingleItem(id: number){
    return  this.http.get("https://fakestoreapi.com/products/"+id)
  }
    
 
}
