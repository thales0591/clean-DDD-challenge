import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface SalesHistoryProps {
  stockId: UniqueEntityId
  startDate: Date
  endDate: Date
  stockSales: number
  historyOfSales: Date[]
}

export class SalesHistory extends Entity<SalesHistoryProps> {
  create(props: SalesHistoryProps, id?: UniqueEntityId) { 
  }
}