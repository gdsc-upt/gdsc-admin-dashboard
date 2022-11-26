import { ValuesOf } from "./types";

export const API_URL = "https://dev.api.gdscupt.tech/v1/";

export const URLS = {
  dashboard: "/dashboard",
  technologies: "/technologies",
} as const;

export const Colors = {
  primary: "primary",
  secondary: "secondary",
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
} as const;

export type Color = ValuesOf<typeof Colors>;
