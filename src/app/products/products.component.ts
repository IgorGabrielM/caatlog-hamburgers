import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/@data/models/products.models';
import { ProductsService } from 'src/@data/services/products.service';
import {CategoriesService} from "../../@data/services/categories.service";
import {CategoriesModel} from "../../@data/models/categories.model";
import {faMartiniGlassCitrus, faReceipt, faBurger, faIceCream} from "@fortawesome/free-solid-svg-icons";
import {CheckoutModel} from "../../@data/models/checkout.model";
import {ActivatedRoute, Params, Router} from "@angular/router";

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
  faReceipt = faReceipt

  products : ProductsModel[]
  checkout: CheckoutModel
  categories: CategoriesModel[]
  productSelected : ProductsModel
  cardNumber: Params

  visibility = 'hidden'

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadCategories()
    this.checkout = new CheckoutModel()
    this.checkout.products = []
    this.getCardNumber()
  }

  getCardNumber(){
    this.activatedRoute.params.subscribe((param) => {
      this.cardNumber= param
    })
  }

  navigateToReciept(){
      this.activatedRoute.params.subscribe((param) => {
        this.router.navigateByUrl(`reciept/${this.cardNumber}`)
      })
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
    this.categoriesService.list().subscribe((categories: CategoriesModel[]) => {
      this.categories = categories
    })
  }

  onNewVisibility(event: string){
    this.visibility = event
  }

  findProduct(id: string){
    this.productsService.findProductsById(id).subscribe((data) => {
      this.productSelected = data
    })
  }

  addProductToCheckout(id: string){
    this.checkout.products.push(id)
    console.log(this.checkout)
  }

}
