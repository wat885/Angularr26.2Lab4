import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './catalog/product-list/product-list.component'
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component'


import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path:'products/:id',
        component:ProductDetailComponent 
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule { }