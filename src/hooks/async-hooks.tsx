import { DependencyList, useEffect } from "react";

export function useEffectAsync(fn: () => Promise<void>, deps: DependencyList = []) {
  useEffect(() => {
    fn()
      .then()
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-console
        console.trace();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
