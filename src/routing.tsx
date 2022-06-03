import { useNavigate } from 'react-router-dom';

export function useRouting() {
  const navigate = useNavigate();

  function routeTo(url: string) {
    navigate(url, { replace: true });
  }

  return {
    routeTo,
    history: navigate,
  };
}

export function route(fn: () => string): string;
export function route<T>(fn: (p: T) => string, params: Array<keyof T>): string;
export function route<T>(fn: (p: T) => string, params: Array<keyof T> = []) {
  const parameter = Object.fromEntries(params.map(p => [p, `:${String(p)}`]));
  return fn(parameter as any);
}
