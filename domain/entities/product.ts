import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface ProductProps {
  color: string
  size: string
  cost: number
  value: number
}

export class Product extends Entity<ProductProps> {
    create(props: ProductProps, id?: UniqueEntityId) {  
    }
}