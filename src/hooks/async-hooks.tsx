import { useEffect } from "react";

export function useEffectAsync(fn: () => Promise<void>, deps: any[]) {
    useEffect(() => {
        fn()
    }, deps);
}