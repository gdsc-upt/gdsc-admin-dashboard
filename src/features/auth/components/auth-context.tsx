import React, {
  createContext, useContext, useMemo, useState,
} from "react";
import { AxiosError } from "axios";
import authData, { AUTH_DATA_KEY } from "../helpers/auth-data";
import { post } from "../../../services/api";
import { LoginResponse } from "../models/login.response";
import { RegisterRequest } from "../models/register.request";
import { LoginRequest } from "../models/login.request";
import { RegisterResponse } from "../models/register.response";

type VoidFn = () => void;

export interface IAuthContext {
  readonly user?: LoginResponse;
  readonly signIn: (
    data: LoginRequest,
    onSuccess: VoidFn,
    onError?: (error: AxiosError) => void,
  ) => void;
  readonly signUp: (
    data: RegisterRequest,
    onSuccess: VoidFn,
    onError?: (error: AxiosError) => void,
  ) => void;
  readonly signOut: (callback?: VoidFn) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
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
