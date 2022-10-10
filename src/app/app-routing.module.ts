import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CreateProductsComponent} from "./page-admin/create-products/create-products.component";
import {PageAdminComponent} from "./page-admin/page-admin.component";
import {CreateCategoryComponent} from "./page-admin/create-category/create-category.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'admin',
    component: PageAdminComponent
  },
  {
    path: 'create-products',
    component: CreateProductsComponent
  },
  {
    path: 'create-category',
    component: CreateCategoryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
