import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ProductsComponent} from "./products/products.component";
import {CreateProductsComponent} from "./page-admin/create-products/create-products.component";
import {ModalProductComponent} from "./products/modal-product/modal-product.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PageAdminComponent } from './page-admin/page-admin.component';
import { CreateCategoryComponent } from './page-admin/create-category/create-category.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductsComponent,
    ModalProductComponent,
    PageAdminComponent,
    CreateCategoryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
