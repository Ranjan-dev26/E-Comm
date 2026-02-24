import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Seller } from './services/seller'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private seller: Seller) {}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> | Observable<boolean> | Promise<boolean> {

      if (localStorage.getItem('seller')) {
        return true;
    }
    
    return this.seller.isSellerLoggedIn;
  }
} 