import authData from './auth-data';

const _isExpired = () => Date.parse(authData.expiration) <= Date.now();

export const isExpired = () => !authData?.expiration || _isExpired();
export const isNotExpired = () => !isExpired();
