import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const baseURL = "http://127.0.0.1:3000/";

export default function Fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
