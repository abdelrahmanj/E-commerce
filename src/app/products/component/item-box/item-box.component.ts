import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent {
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 0;

  addToCart(){
    this.item.emit({item: this.data, quantity: this.amount});
  }

}
