import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductsModel} from "../models/products.models";
import {HttpClient} from "@angular/common/http";
import {CategoriesModel} from "../models/categories.model";

@Injectable()
export class CategoriesService {
  readonly baseUrl: string = 'http://localhost:3000/categories'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<CategoriesModel[]>{
    return this.http.get<CategoriesModel[]>(`${this.baseUrl}`)
  }

  post(category: CategoriesModel): Observable<CategoriesModel>{
    return this.http.post<CategoriesModel>(`${this.baseUrl}`, category)
  }

  delete(id: string){
    return this.http.delete<CategoriesModel>(`${this.baseUrl}/${id}`)
  }

  put(category: CategoriesModel){
    return this.http.put<CategoriesModel>(`${this.baseUrl}/${category.id}`, category)
  }

}
