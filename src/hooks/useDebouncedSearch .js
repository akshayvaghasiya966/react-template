import { useEffect, useState } from 'react';

const useDebouncedSearch = (searchTerm, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, delay);

    return () => clearTimeout(timer); // cleanup old timer
  }, [searchTerm, delay]);

  return debouncedValue;
};

export default useDebouncedSearch;
