import { Component, OnInit } from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {ProductsService} from "../../@data/services/products.service";
import {CategoriesService} from "../../@data/services/categories.service";
import {ProductsModel} from "../../@data/models/products.models";
import {CategoriesModel} from "../../@data/models/categories.model";

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.scss'],
  providers: [ProductsService, CategoriesService]
})
export class PageAdminComponent implements OnInit {
  products : ProductsModel[]
  categories: CategoriesModel[]
  window: Window

  faPlus = faPlus

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadCategories()
  }

  loadProducts(){
    this.productsService.listProducts().subscribe((response: ProductsModel[]) => {
      this.products = response
    })
  }

  loadCategories(){
    this.categoriesService.list().subscribe((categories: CategoriesModel[]) => {
      this.categories = categories
    })
  }

  deleteProduct(id: string){
    this.productsService.delete(id).subscribe((deletedEvent) => {
      console.log('Apagou')
    })
  }


}
