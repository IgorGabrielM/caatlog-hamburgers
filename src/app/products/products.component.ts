import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/@data/models/products.models';
import { ProductsService } from 'src/@data/services/products.service';
import {CategoriesService} from "../../@data/services/categories.service";
import {CategoriesModel} from "../../@data/models/categories.model";
import {faBurger} from "@fortawesome/free-solid-svg-icons";
import {faMartiniGlassCitrus} from "@fortawesome/free-solid-svg-icons";
import {faIceCream} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService, CategoriesService]
})
export class ProductsComponent implements OnInit {
  faBurger = faBurger;
  faMartiniGlassCitrus = faMartiniGlassCitrus;
  faIceCream = faIceCream;

  products : ProductsModel[]
  categories: CategoriesModel[]
  productSelected : ProductsModel

  visibility = 'hidden'

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadCategories()
  }

  changeVisibility(){
    this.visibility = 'visible'
  }

  loadProducts(){
    this.productsService.listProducts().subscribe((response: ProductsModel[]) => {
      this.products = response
    })
  }

  loadCategories(){
    this.categoriesService.listCategories().subscribe((categories: CategoriesModel[]) => {
      this.categories = categories
    })
  }

  onNewVisibility(event: string){
    this.visibility = event
  }

  findProduct(id: number){
    this.productsService.findProductsById(id).subscribe((data) => {
      this.productSelected = data
    })
  }

}
