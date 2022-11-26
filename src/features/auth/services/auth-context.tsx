import React, {
  createContext, useContext, useMemo, useState,
} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AxiosError } from "axios";
import authData from "../helpers/auth-data";
import { AUTH_URLS } from "../routes";
import { post } from "../../../services/api";
import { AUTH_DATA_KEY } from "../../../helpers/constants";
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

export function IfLoggedIn({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  console.log("If not logged in guard");

  if (!auth.user?.token || new Date(auth.user?.expiration ?? "").getTime() < Date.now()) {
    console.log("Not logged in, go to login");
    auth.signOut();
    return <Navigate to={AUTH_URLS.login} state={{ from: location }} replace />;
  }

  return children;
}

export interface IfNotLoggedInProps {
  readonly children: JSX.Element;
  readonly redirectTo?: string;
}

export function IfNotLoggedIn({ children, redirectTo }: IfNotLoggedInProps) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user?.token && new Date(auth.user.expiration ?? "").getTime() > Date.now()) {
    console.log("Is logged in, go to: ", redirectTo);
    return <Navigate to={redirectTo || "/"} state={{ from: location }} replace />;
  }

  return children;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LoginResponse | undefined>(authData);

  const signIn = (data: LoginRequest, callback: VoidFn, onError?: (error: AxiosError) => void) => {
    const login = post<LoginResponse>("auth/login", data).then(response => {
      console.log("login response", response);
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
      console.log("register response", response);
      setTimeout(() => callback());
      return response;
    });

    return register.catch(error => onError?.(error));
  };

  const signOut = (callback: VoidFn = () => {}) => {
    console.log("logout");
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
