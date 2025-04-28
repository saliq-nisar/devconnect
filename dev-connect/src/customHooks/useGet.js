import { useState, useEffect } from 'react';
/**
 * Custom hook to fetch data from a given URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {object} - An object containing the fetched data, error, and loading state.
 */
function useGet(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useGet;