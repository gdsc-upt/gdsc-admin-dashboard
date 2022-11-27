import { AxiosError } from "axios";
import { createContext, useContext } from "react";
import { LoginResponse } from "../models/login.response";
import { LoginRequest } from "../models/login.request";
import { RegisterRequest } from "../models/register.request";
import { VoidFn } from "../../../helpers/types";

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

export const AuthContext = createContext<IAuthContext>(null!);

export const useAuth = () => useContext(AuthContext);
