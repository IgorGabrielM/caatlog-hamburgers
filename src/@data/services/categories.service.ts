import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductsModel} from "../models/products.models";
import {HttpClient} from "@angular/common/http";
import {CategoriesModel} from "../models/categories.model";

@Injectable()
export class CategoriesService {
  baseUrl: string = 'http://localhost:3000/categories'

  constructor(
    private http: HttpClient
  ) { }

  listCategories(): Observable<CategoriesModel[]>{
    return this.http.get<CategoriesModel[]>(`${this.baseUrl}`)
  }

}
