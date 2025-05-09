import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, immediate = true, deps = []) => {
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction(...args);
      setValue(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute]);

  return { execute, loading, error, value };
};

export default useAsync;
