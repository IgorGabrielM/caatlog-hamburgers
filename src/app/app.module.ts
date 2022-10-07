import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ModalProductComponent } from './products/modal-product/modal-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateProductsComponent,
    ModalProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
