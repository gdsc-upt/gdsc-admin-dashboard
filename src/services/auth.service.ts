import axios, { AxiosResponse } from 'axios';
import { API_URL, AUTH_DATA_KEY } from '../helpers/constants';
import { LoginResponse } from '../models/login-response';
import { RegisterResponse } from '../models/register-response';

const AUTH_URL = `${API_URL}auth/`;

export async function login(username: string, password: string) {
  const data = { username, password };
  const response: AxiosResponse<LoginResponse> = await axios.post(`${AUTH_URL}login`, data);

  if (response.data.token) {
    localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(response.data));
  }

  return response.data;
}

export function logout() {
  localStorage.removeItem(AUTH_DATA_KEY);
}

export async function register(username: string, email: string, password: string) {
  const data = { username, email, password };
  const response: AxiosResponse<RegisterResponse> = await axios.post(`${AUTH_URL}register`, data);

  if (response.data.errors.length) {
    console.error(response.data.errors);
    // localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(response.data));
  }

  return response.data;
}
