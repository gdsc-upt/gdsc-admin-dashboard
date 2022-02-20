import { useNavigate } from "react-router-dom"

export const urls = {
  login: () => "/login",
  dashboard: () => "/dashboard",

  urlWithSomeParam: (p: { product: string }) => `/app/view/${p.product}`,
}

export const startUrl = urls.login

export function useRouting() {
  const navigate = useNavigate()

  function routeTo(fn: () => string): void
  function routeTo<T>(fn: (p: T) => string, params: T): void
  function routeTo<T>(fn: (p?: T) => string, params?: T) {
    navigate(fn(params))
  }

  return {
    routeTo,
    history: navigate,
  }
}

export function route(fn: () => string): string
export function route<T>(fn: (p: T) => string, params: Array<keyof T>): string
export function route<T>(fn: (p: T) => string, params: Array<keyof T> = []) {
  const parameter = Object.fromEntries(params.map((p) => [p, `:${p}`]))
  return fn(parameter as any)
}
