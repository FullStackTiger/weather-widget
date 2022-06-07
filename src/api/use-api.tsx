import { UseQueryOptions, useQuery } from "react-query";
import { ApiError, isApiError } from "./api-error";

export function useApi<
  T,
  Options extends UseQueryOptions<T, Error> = UseQueryOptions<T, Error>
>(endpoint: string, options?: Options, responseOn404?: T) {
  return useQuery<T, Error>(
    endpoint,
    () =>
      fetch(endpoint)
        .then((res) => {
          if (res.status === 404 && responseOn404 !== undefined)
            return responseOn404;
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((data: T | ApiError) => {
          if (isApiError(data)) {
            throw new Error(data.message);
          }
          return data;
        }),
    options
  );
}

export default useApi;
