import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../helpers/constants';
import { MenuItem } from './models/menu-item';
import { MenuItemRequest } from './models/menu-item.request';
import { authHeader } from '../auth/helpers/auth-header';

const URL = `${API_URL}menu-items`;

export async function getMenuItems() {
  const response: AxiosResponse<MenuItem[]> = await axios.get(`${URL}`);
  return response.data;
}

export async function addMenuItem(menuItem: MenuItemRequest) {
  const response: AxiosResponse<MenuItem> = await axios.post(`${URL}`, menuItem, {
    headers: authHeader(),
  });
  return response.data;
}
