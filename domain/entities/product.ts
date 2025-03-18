import { Entity } from "../../core/entities/entity"

interface ProductProps {
  color: string
  size: string
  cost: number
  value: number
}

export class Product extends Entity<ProductProps> {
  
}