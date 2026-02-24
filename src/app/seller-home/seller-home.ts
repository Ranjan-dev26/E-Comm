import { Component } from '@angular/core';
import { Product } from '../services/product';
import { product } from '../data-type';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-seller-home',
  imports: [NgFor],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css',
})
export class SellerHome {
  productList: undefined | product[];
  productMessage: undefined | string;
  constructor(private product: Product) { }

  list() {
    this.product.productList().subscribe((result) => {
      console.warn(result);
      this.productList = result;
    });
  }
  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: string) {
    console.warn("test id", id);
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product is deleted";
        this.list(); // Refresh the product list after deletion
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}

