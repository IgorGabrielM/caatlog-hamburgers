import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CheckoutModel} from "../models/checkout.model";
import {CategoriesModel} from "../models/categories.model";
import {Observable} from "rxjs";

@Injectable()

export class CheckoutService {

  readonly baseUrl: string = 'http://localhost:3000/checkouts'

  constructor(
    private http: HttpClient
  ) { }

  create(checkout: CheckoutModel): Observable<CheckoutModel>{
    return this.http.post<CheckoutModel>(this.baseUrl, checkout)
  }

  listCheckout(id ?: number): Observable<CheckoutModel[]>{
    return this.http.get<CheckoutModel[]>(this.baseUrl + '/' + id)
  }

  edit(checkout: CheckoutModel): Observable<CheckoutModel>{
    return this.http.put<CheckoutModel>(this.baseUrl + '/' + checkout.id, checkout)
  }

  delete(id: string){
    return this.http.delete(this.baseUrl + '/' + id)
  }

}
