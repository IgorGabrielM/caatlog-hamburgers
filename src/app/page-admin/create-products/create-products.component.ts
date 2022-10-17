import { Component, OnInit } from '@angular/core';
import {ProductsModel} from "../../../@data/models/products.models";
import {ProductsService} from "../../../@data/services/products.service";
import { v4 as uuidv4 } from 'uuid';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss'],
  providers: [ProductsService]
})
export class CreateProductsComponent implements OnInit {
  product: ProductsModel
  products: ProductsModel[]

  constructor(
    private productsService: ProductsService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product = new ProductsModel()
    this.loadProducts()
    this.activatedRoute.params.subscribe((param: ProductsModel) => {
      if (!param.id){
        return
      }
      this.findProduct(param.id)
    })
  }

  findProduct(id: string){
    this.productsService.findProductsById(id).subscribe((product) => {
      this.product = product
    })
  }

  loadProducts(){
    this.productsService.listProducts().subscribe((products) => {
      this.products = products
    })
  }

  createProduct(){
    this.productsService.post({... this.product, id: uuidv4()}).subscribe(() => {
      console.log('Deu certo: ' + this.product)
    })
  }

  showToastr(){
    this.toastr.success('Hello world!', 'Toastr fun!');
    //https://www.npmjs.com/package/ngx-toastr
  }

}
