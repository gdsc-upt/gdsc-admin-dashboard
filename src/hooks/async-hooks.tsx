import { DependencyList, useCallback, useEffect } from "react";

export function useEffectAsync(fn: () => Promise<void>, deps: DependencyList) {
  const func = useCallback(fn, [fn]);

  useEffect(() => {
    func()
      .then()
      .catch(error => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, func]);
}
