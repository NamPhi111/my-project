import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { ProductDetail } from './product-detail/product-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, Header, ProductDetail],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-project');
  name = 'Angular';
  //Hiển thị thông tin cá nhân ra ngoài màn hình
  person = {
    name: 'Nam Phi',
    age: 20,
    address: 'Nam Định',
  };
  receiveData(data: string) {
  console.log("Nhận từ con:", data);
}
}