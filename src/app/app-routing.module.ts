import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CreateProductsComponent} from "./page-admin/create-products/create-products.component";
import {PageAdminComponent} from "./page-admin/page-admin.component";
import {CreateCategoryComponent} from "./page-admin/create-category/create-category.component";
import {ReceiptComponent} from "./products/receipt/receipt.component";
import {SelectCardComponent} from "./select-card/select-card.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-card',
    pathMatch: 'full'
  },
  {
    path: 'products/:id',
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
  },
  {
    path: 'receipt/:id',
    component: ReceiptComponent
  },
  {
    path: 'select-card',
    component: SelectCardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
