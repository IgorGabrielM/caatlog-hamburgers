import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ProductsModel} from "../models/products.models";

@Injectable()

export class ProductsService {

  baseUrl: string = 'http://localhost:3000/products'

  constructor(
    private http: HttpClient
  ) { }

  listProducts(): Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(`${this.baseUrl}`)
  }

  findProductsById(id : string): Observable<ProductsModel>{
    return this.http.get<ProductsModel>(`${this.baseUrl}/${id}`)
  }

  delete(id : string): Observable<ProductsModel>{
    return this.http.delete<ProductsModel>(`${this.baseUrl}/${id}`)
  }

  post(product: ProductsModel): Observable<ProductsModel>{
    return this.http.post<ProductsModel>(this.baseUrl, product)
  }

  put(product: ProductsModel): Observable<ProductsModel>{
    return this.http.put<ProductsModel>(`${this.baseUrl}/${product.id}`, product)
  }

}
