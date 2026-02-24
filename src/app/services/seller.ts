import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup} from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Seller {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: signup) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
       // console.warn("result", result);
      });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data:login){
    console.warn(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((result: any) => {
        console.warn("result", result);
        if (result && result.body && result.body.length) {
          this.isSellerLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(result.body[0]));
          this.router.navigate(['seller-home']);
        } else {
          console.warn('Login failed');
          this.isLoginError.emit(true);
        }
       }
     );
   } 

}

