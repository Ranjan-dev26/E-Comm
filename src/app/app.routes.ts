import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
import { SellerHome } from './seller-home/seller-home';
import { AuthGuard } from './auth-guard';
import { SellerAddProduct } from './seller-add-product/seller-add-product';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'seller-auth',component:SellerAuth},
    {path:'seller-home', component:SellerHome, canActivate:[AuthGuard]},
    {path:'seller-add-product', component:SellerAddProduct, canActivate:[AuthGuard]},
];
