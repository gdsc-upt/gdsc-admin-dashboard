import { List } from "../../../models/types";

export interface RegisterResponse {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly errors: List;
}
