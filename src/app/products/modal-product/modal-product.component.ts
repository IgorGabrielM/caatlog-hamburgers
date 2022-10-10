import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsModel} from "../../../@data/models/products.models";

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {
  @Input() visibility: string
  @Input() product: ProductsModel

  @Output() newVisibility = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.newVisibility.emit('hidden')
  }

}
