import { DependencyList, useEffect } from "react"

export function useEffectAsync(fn: () => Promise<void>, deps: DependencyList) {
  useEffect(() => {
    fn().then()
  }, deps)
}
