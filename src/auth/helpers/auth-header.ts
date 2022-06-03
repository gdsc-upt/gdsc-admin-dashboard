import authData from './auth-data';
import { isNotExpired } from './token-utils';

export function authHeader(): Record<string, string> {
  if (isNotExpired()) {
    return { Authorization: `Bearer ${authData.token}` };
  }

  return {};
}
