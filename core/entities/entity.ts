import { UniqueEntityId } from "./unique-entity-id"

export class Entity<Props> {
  private _id: UniqueEntityId
  protected props: Props

  constructor(props: Props, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }

}