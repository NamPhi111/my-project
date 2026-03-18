import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  // thuộc tính
  count = 0;
  link = 'https://www.facebook.com/';
  name = '';

  isLogin = true;
  foods = ['nam phi', 'phi hip', 'anh phi'];

  // Phương thức
  increase() {
    this.count++;
  }
}