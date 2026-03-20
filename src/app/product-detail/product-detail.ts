import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  standalone: true,
})
export class ProductDetail {
  @Input() productName: string = '';
  @Output() handleClick = new EventEmitter<string>();

  handleSend() {
    this.handleClick.emit("Hello from ProductDetail component!");
  }
}