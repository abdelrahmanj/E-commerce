import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../module/products';
import { ProductsService } from '../../servcie/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  item: any = {};
  id: any;
  loading: boolean = false;
  constructor(private service: ProductsService, private route: ActivatedRoute){
   this.id = this.route.snapshot.paramMap.get("id");  
  }
  ngOnInit(){
    this.getSingleItem();
    
  }

  getSingleItem(){
    this.loading = true;
    this.service.getSingleItem(this.id).subscribe((data: any) => {
      this.item = data;
      this.loading = false;
    },error => {
      this.loading = false;
      console.log(error.message);
    })
  }
}
