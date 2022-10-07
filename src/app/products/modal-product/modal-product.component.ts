import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {
  @Input() visibility: string

  @Output() newVisibility = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.newVisibility.emit('hidden')
  }

}
