import React, {
  createContext, useContext, useMemo, useState,
} from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AxiosError } from "axios";
import {
  LoginRequest, LoginResponse, RegisterRequest, RegisterResponse,
} from "../models";
import authData from "../helpers/auth-data";
import { AUTH_URLS } from "../routes";
import { post } from "../../../services/api";
import { AUTH_DATA_KEY } from "../../../helpers/constants";

type VoidFn = () => void;

export interface IAuthContext {
  user?: LoginResponse;
  signIn: (data: LoginRequest, onSuccess: VoidFn, onError?: (error: AxiosError) => void) => void;
  signUp: (data: RegisterRequest, onSuccess: VoidFn, onError?: (error: AxiosError) => void) => void;
  signOut: (callback?: VoidFn) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

export function useAuth() {
  return useContext(AuthContext);
}

export function IfLoggedIn({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  console.log("require auth", auth);
  if (!auth.user?.token) {
    console.log("go to login");
    return <Navigate to={AUTH_URLS.login} state={{ from: location }} replace />;
  }

  return children;
}

export function IfNotLoggedIn({
  children,
  redirectTo,
}: {
  children: JSX.Element;
  redirectTo?: string;
}) {
  const auth = useAuth();
  const location = useLocation();

  console.log("if not logged in", auth);
  if (auth.user?.token) {
    console.log("go to: ", redirectTo);
    return <Navigate to={redirectTo || "/"} state={{ from: location }} replace />;
  }

  return children;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  console.log("auth provider");
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
  ) => post<RegisterResponse>("auth/register", data)
    .then(response => {
      console.log("register response", response);
      setTimeout(() => callback());
      return response;
    })
    .catch(error => onError?.(error));

  const signOut = (callback: VoidFn = () => {
  }) => {
    console.log("logout");
    localStorage.removeItem(AUTH_DATA_KEY);
    setUser(undefined);
    setTimeout(() => {
      callback();
    });
  };

  const value = useMemo(() => {
    console.log("use memo", user);
    return {
      user, signIn, signUp, signOut,
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
