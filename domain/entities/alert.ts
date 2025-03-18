import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface AlertProps {
  stockId: UniqueEntityId
  minQuantity: number
  content: string

}

export class Alert extends Entity<AlertProps> {
    create(props: AlertProps, id?: UniqueEntityId) { 
    }
}