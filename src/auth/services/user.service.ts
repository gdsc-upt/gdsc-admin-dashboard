import axios from 'axios';
import { API_URL } from '../../helpers/constants';
import { authHeader } from './auth-header';

const USER_URL = `${API_URL}roles`;

export class UserService {
  getUserBoard() {
    return axios.get(`${USER_URL}user`, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(`${USER_URL}mod`, { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(`${USER_URL}admin`, { headers: authHeader() });
  }
}
