import { Technology } from "./models/technology";
import { TechnologyRequest } from "./models/technology-request";
import { get, post } from "../../services/api";

export function getTechnologies() {
  return get<Technology[]>("technologies");
}

export function addTechnology(technology: TechnologyRequest) {
  return post<Technology>("technologies", technology);
}
