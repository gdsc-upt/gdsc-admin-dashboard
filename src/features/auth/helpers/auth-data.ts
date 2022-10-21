import { AUTH_DATA_KEY } from "../../../helpers/constants";
import { LoginResponse } from "../models/login.response";

function authData(): LoginResponse {
  return JSON.parse(localStorage.getItem(AUTH_DATA_KEY) ?? "{}");
}

export default authData();
