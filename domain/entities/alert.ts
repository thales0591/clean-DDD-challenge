import { Entity } from "../../core/entities/entity"

interface AlertProps {
  stockId: string
  minQuantity: number
}

export class Alert extends Entity<AlertProps> {
  
}