import {CardModel} from "./card.model";

export class CheckoutModel{
  id: string
  isClosed: boolean
  card: CardModel
  products: any[]
}
