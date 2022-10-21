import { useState } from "react";
import { useEffectAsync } from "./async-hooks";

export function useData<T>(dataLoader: (args?: unknown) => Promise<T>, param?: unknown, deps = []) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffectAsync(async () => {
    try {
      setIsLoading(true);
      const newData = await dataLoader(param);
      setData(newData);
      setError(undefined);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, deps);

  return {
    data,
    error,
    isLoading,
    setData,
  };
}
