import axios from 'axios';
import { API_URL } from '../helpers/constants';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export function get<Response>(url: string) {
  return api.get<Response>(`${url}`).then(response => response.data);
}

export function post<Response>(url: string, payload: unknown) {
  return api.post<Response>(`${url}`, payload).then(response => response.data);
}

export function patch<Response>(url: string, payload: unknown) {
  return api.patch<Response>(`${url}`, payload).then(response => response.data);
}

export function deleteRequest<Response>(url: string) {
  return api.delete<Response>(`${url}`).then(response => response.data);
}
