import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../services/product';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.html',
  styleUrl: './seller-add-product.css',
})
export class SellerAddProduct {

addProductMessage: string | undefined;
  constructor(private product:Product) {}
  ngOnInit(): void { }

  submit(data: product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result); 
      if(result){
        this.addProductMessage = "Product is added successfully";
      }
      setTimeout(() => {this.addProductMessage = undefined;
      }, 3000);
    });
  }
} 

