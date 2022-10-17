import { Component, OnInit } from '@angular/core';
import {faArrowLeft, faCircleDollarToSlot, faReceipt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faReturn = faArrowLeft
  faReceipt = faReceipt
  faDollar = faCircleDollarToSlot

  constructor() { }

  ngOnInit(): void {
  }

}
