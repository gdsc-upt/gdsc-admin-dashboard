import { LoginResponse } from "../models/login.response";

export const AUTH_DATA_KEY = "gdsc-admin-auth-data";

function authData(): LoginResponse {
  return JSON.parse(localStorage.getItem(AUTH_DATA_KEY) ?? "{}");
}

export default authData();
