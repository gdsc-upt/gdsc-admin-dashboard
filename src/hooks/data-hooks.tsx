import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";

export function useData<Res, Req>(dataLoader: Promise<AxiosResponse<Res, Req>>) {
  const [data, setData] = useState<Res>();
  const [error, setError] = useState<AxiosError<Req, Res>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dataLoader
      .then(response => {
        setData(response.data);
        setError(undefined);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [dataLoader]);

  return {
    data,
    error,
    isLoading,
    setData,
  };
}
