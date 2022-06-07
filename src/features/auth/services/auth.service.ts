import { AUTH_DATA_KEY } from '../../../helpers/constants';
import { LoginResponse } from '../models/login.response';
import { RegisterResponse } from '../models/register.response';
import { post } from '../../../services/api';

export async function login(username: string, password: string) {
  const data = { username, password };
  const response = await post<LoginResponse>('auth/login', data);

  if (response.token) {
    localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(response));
  }

  return response;
}

export function logout() {
  console.log('logout');
  localStorage.removeItem(AUTH_DATA_KEY);
}

export async function register(username: string, email: string, password: string) {
  const data = { username, email, password };
  return post<RegisterResponse>('auth/register', data);
}
