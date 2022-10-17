import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CardModel} from "../models/card.model";

@Injectable()
export class CardService {

  readonly baseUrl: string = 'http://localhost:3000/cards'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<CardModel[]>{
    return this.http.get<CardModel[]>(this.baseUrl)
  }

  create(card: CardService): Observable<CardModel>{
    return this.http.post<CardModel>(this.baseUrl, card)
  }

  delete(id: string): Observable<CardModel>{
    return this.http.delete<CardModel>(this.baseUrl + '/' + id)
  }

}
