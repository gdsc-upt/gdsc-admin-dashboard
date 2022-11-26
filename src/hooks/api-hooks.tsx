import axios, { AxiosResponse } from "axios";
import { API_URL } from "../helpers/constants";
import { useAuth } from "../features/auth";
import { useData } from "./data-hooks";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function useAuthHeaders() {
  const auth = useAuth();

  return {
    Authorization: `Bearer ${auth.user?.token}`,
  };
}

export function usePost<Res, Req>(url: string, payload: Req) {
  const postRequest = api.post<Res, AxiosResponse<Res, Req>, Req>(`${url}`, payload, {
    headers: { ...useAuthHeaders() },
  });

  return useData(postRequest);
}

export function useGet<Res>(url: string) {
  const postRequest = api.get<Res>(`${url}`, {
    headers: { ...useAuthHeaders() },
  });

  return useData(postRequest);
}
