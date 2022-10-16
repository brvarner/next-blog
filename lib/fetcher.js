import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const baseURL = "https://next-blog-4r4fbq7uj-brvarner.vercel.app";

export default function Fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
