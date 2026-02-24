import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../services/seller';
import { Router } from '@angular/router';
import { login, signup} from '../data-type';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule, NgIf],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
})
export class SellerAuth {
  constructor(private seller:Seller, private route:Router) { }
  
  showLogin = false;
  authError:string = "";
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data:signup):void{
    console.warn(data);
    this.seller.userSignUp(data);
  }
  login(data:login):void{
     this.authError = "";
    // console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = "Login Failed, Please check your credentials";
      }
  })
}

  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }

}
