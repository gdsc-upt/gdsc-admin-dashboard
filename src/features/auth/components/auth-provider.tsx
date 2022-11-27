import React, {
  useMemo, useState,
} from "react";
import { AxiosError } from "axios";
import authData, { AUTH_DATA_KEY } from "../helpers/auth-data";
import { post } from "../../../services/api";
import { LoginResponse } from "../models/login.response";
import { RegisterRequest } from "../models/register.request";
import { LoginRequest } from "../models/login.request";
import { RegisterResponse } from "../models/register.response";
import { AuthContext, IAuthContext } from "./auth-context";
import { DefaultProps, VoidFn } from "../../../helpers/types";

export function AuthProvider({ children }: DefaultProps) {
  const [user, setUser] = useState<LoginResponse | undefined>(authData);

  const signIn = (data: LoginRequest, callback: VoidFn, onError?: (error: AxiosError) => void) => {
    const login = post<LoginResponse>("auth/login", data).then(response => {
      localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(response.data));
      setUser(response.data);
      setTimeout(() => callback());
      return response;
    });

    return login.catch(error => onError?.(error));
  };

  const signUp = (
    data: RegisterRequest,
    callback: VoidFn,
    onError?: (error: AxiosError) => void,
  ) => {
    const register = post<RegisterResponse>("auth/register", data).then(response => {
      setTimeout(() => callback());
      return response;
    });

    return register.catch(error => onError?.(error));
  };

  const signOut = (callback: VoidFn = () => {}) => {
    localStorage.removeItem(AUTH_DATA_KEY);
    setUser(undefined);
    setTimeout(() => callback());
  };

  const value = useMemo<IAuthContext>(
    () => ({
      user,
      signIn,
      signUp,
      signOut,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
