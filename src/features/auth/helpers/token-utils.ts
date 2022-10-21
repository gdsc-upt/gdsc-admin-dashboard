import authData from "./auth-data";

const _isExpired = () => Date.parse(authData.expiration) <= Date.now();
export const tokenExpired = () => !authData?.expiration || _isExpired();
export const tokenNotExpired = () => !tokenExpired();
