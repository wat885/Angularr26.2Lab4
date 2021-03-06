import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { BackendService } from './backend.service'
import { FormsModule } from '@angular/forms';

import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './catalog/product-list/product-list.component'
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component'

import { RouterModule, Routes } from '@angular/router';
import {AppRouteModule} from './app-route.module'

import { BrowserAnimationsModule } from'@angular/platform-browser/animations';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path:'',
//     pathMatch:'full',
//     redirectTo:'home'
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'products',
//     component: ProductListComponent
//   },
//   {
//     path:'products/:id',
//     component:ProductDetailComponent 
//   },
//   {
//     path: '**',
//     component: PageNotFoundComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalogModule,
    HomeModule,
    AppRouteModule,
    BrowserAnimationsModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]

})
export class AppModule { }





