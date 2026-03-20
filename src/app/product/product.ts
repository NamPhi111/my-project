import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule, ProductDetail],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  // thuộc tính
  count = 0;
  link = 'https://www.facebook.com/';


  isLogin = true;

  foods = ['Pasta'];
  name: string = "Iphone 15 pro max";
  price: number = 999.99

  // Phương thức
  increase() {
    this.count++;
  }
}