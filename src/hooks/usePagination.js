import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const usePagination = ({
  url,
  method = 'GET',
  headers = {},
  queryParams = {},
  perPage = 10,
  initialPage = 1,
  autoFetch = true,
}) => {
  const [page, setPage] = useState(initialPage);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchPage = useCallback(
    async (pageNum = page) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios({
          url,
          method,
          headers,
          params: {
            page: pageNum,
            per_page: perPage,
            ...queryParams,
          },
        });

        setData(response.data?.data || []);
        setTotalPages(response.data?.total_pages || 1);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [url, method, headers, perPage, queryParams, page]
  );

  useEffect(() => {
    if (autoFetch) fetchPage(page);
  }, [page, fetchPage]);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (num) => setPage(() => Math.min(Math.max(num, 1), totalPages));

  return {
    data,
    loading,
    error,
    page,
    totalPages,
    setPage: goToPage,
    nextPage,
    prevPage,
    refetch: fetchPage,
  };
};

export default usePagination;
