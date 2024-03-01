import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product: Product = { id: 0, name: '', price: 0, description: '' };
  products: Product[] = [];

  addProduct() {
    this.products.push({ ...this.product });
   this.product = { id: 0, name: '', price: 0, description: '' }; // Reset
  }


}
