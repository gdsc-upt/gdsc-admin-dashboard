import authData from './auth-data';
import { tokenNotExpired } from './token-utils';

export function authHeader(): Record<string, string> {
  if (tokenNotExpired()) {
    return { Authorization: `Bearer ${authData.token}` };
  }

  return {};
}
