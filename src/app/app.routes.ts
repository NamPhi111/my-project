import { Routes } from '@angular/router';
import { About } from './about/about';
import { Product } from './product/product';

export const routes: Routes = [
    {path:'about', component: About},
    {path:'product', component: Product}];
