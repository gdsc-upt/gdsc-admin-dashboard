import { api } from '../../../services/api';
import { AUTH_URLS, authHeader, tokenNotExpired } from '../helpers';
import { useRouting } from '../../../routing';
import { logout } from './auth.service';

api.interceptors.request.use(
  request => {
    if (tokenNotExpired() && request.headers) {
      request.headers = { ...request.headers, ...authHeader() };
    }

    return request;
  },
  undefined,
  { synchronous: true },
);

api.interceptors.response.use(
  response => response,
  error => {
    console.log('error: ', error);

    if (error.response.status === 401) {
      logout();
      const { routeTo } = useRouting();
      return routeTo(AUTH_URLS.login);
    }

    return Promise.reject(error);
  },
);
