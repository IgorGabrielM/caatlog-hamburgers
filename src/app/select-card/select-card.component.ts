import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.scss']
})
export class SelectCardComponent implements OnInit {
  cardNumber: number

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToProducts(){
    this.router.navigateByUrl(`products/${this.cardNumber}`)
  }

}
