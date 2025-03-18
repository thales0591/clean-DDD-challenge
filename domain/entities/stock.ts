import {Entity} from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface StockProps {
  productId: string
  quantity: number
}

export class Stock extends Entity<StockProps> {
  create(props: StockProps, id?: UniqueEntityId) { 
  }
}