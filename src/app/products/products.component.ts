import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/@data/models/products.models';
import { ProductsService } from 'src/@data/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products : ProductsModel[]
  productUnique : ProductsModel

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.productsService.listProducts().subscribe((response: ProductsModel[]) => {
      this.products = response
      console.log(this.products)
    })
  }

  loadUniqueProduct(id : number){
    this.productsService.findProductsById(id).subscribe((response: ProductsModel) => {
      this.productUnique = response
    })
  }
}
