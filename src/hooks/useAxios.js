import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAxios = ({
  url,
  method = 'GET',
  body = null,
  headers = {},
  auto = true,
  dependencies = [],
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(auto);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (overrideBody = null, signal = null) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios({
          url,
          method,
          data: overrideBody ?? body,
          headers,
          signal,
        });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err) || err.name === 'CanceledError') {
          console.log('Request canceled');
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    },
    [url, method, body, headers]
  );

  useEffect(() => {
    if (!auto) return;

    const controller = new AbortController();
    fetchData(null, controller.signal);

    return () => controller.abort(); // ✅ proper cleanup
  }, dependencies); // re-fetch on dependency change

  const refetch = (overrideBody = null) => {
    const controller = new AbortController();
    fetchData(overrideBody, controller.signal);
  };

  return { data, loading, error, refetch };
};

export default useAxios;
