import { AUTH_DATA_KEY } from '../../../helpers/constants';
import { LoginResponse, RegisterResponse } from '../models';
import { post } from '../../../services/api';

export async function login(username: string, password: string) {
  const data = { username, password };
  const response = await post<LoginResponse>('auth/login', data);

  if (response.data.token) {
    localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(response.data));
  }

  return response;
}

export function logout() {
  console.log('logout');
  localStorage.removeItem(AUTH_DATA_KEY);
  window.location.reload();
}

export async function register(username: string, email: string, password: string) {
  const data = { username, email, password };
  return post<RegisterResponse>('auth/register', data);
}
