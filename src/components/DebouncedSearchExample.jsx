import React, { useState, useEffect } from 'react';
import useDebouncedSearch from '../hooks/useDebouncedSearch';
import useAxios from '../hooks/useAxios'; // your axios-based hook

const DebouncedSearchExample = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedSearch(query, 500);

  const {
    data,
    loading,
    error,
    refetch: fetchSearchResults,
  } = useAxios({
    url: `https://api.example.com/search?q=${debouncedQuery}`,
    method: 'GET',
    auto: false, // manual trigger
  });

  useEffect(() => {
    if (debouncedQuery.trim() !== '') {
      fetchSearchResults(); // trigger API when input is debounced
    }
  }, [debouncedQuery]);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🔎 Debounced Search (Axios)</h2>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>❌ {error.message}</p>}
      {data && (
        <pre style={{ background: '#f4f4f4', padding: '1rem' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DebouncedSearchExample;
