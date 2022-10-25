import {Component, Input, OnInit} from '@angular/core';
import {CheckoutService} from "../../../@data/services/checkout.service";
import {CheckoutModel} from "../../../@data/models/checkout.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
  providers: [CheckoutService]
})
export class ReceiptComponent implements OnInit {
  @Input() checkout: CheckoutModel

  constructor(
    private checkoutService: CheckoutService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  postCheckout(){
    this.activatedRoute.params.subscribe((param) => {
      this.checkout.card.id = param.toString()
    })
    this.checkoutService.create(this.checkout)
    console.log(this.checkout)
  }

}
