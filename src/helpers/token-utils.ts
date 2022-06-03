import authData from './auth-data';

export const isNotExpired = () => Date.parse(authData.expiration) > Date.now();
