import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Fetcher(endpoint) {
  const { data, error } = useSWR(`${endpoint}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
