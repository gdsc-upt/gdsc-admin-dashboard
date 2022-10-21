import { BaseEntity } from "./base-entity";

export interface CreatedUpdatedEntity extends BaseEntity {
  readonly created: string;
  readonly updated: string;
}
