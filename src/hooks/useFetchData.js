import { useEffect, useState } from "react";
import { BASE_URL } from "../static";

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      fetchData(BASE_URL + url);
    },
    [url]
  );

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error };
}

export default useFetchData;
