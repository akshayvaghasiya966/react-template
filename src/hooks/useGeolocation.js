import { useState, useEffect } from 'react';

const useGeolocation = (options = {}) => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(new Error('Geolocation is not supported by this browser.'));
      setLoading(false);
      return;
    }

    const successHandler = (pos) => {
      setPosition(pos.coords);
      setError(null);
      setLoading(false);
    };

    const errorHandler = (err) => {
      setError(err);
      setLoading(false);
    };

    const watcher = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, [options]);

  return { position, error, loading };
};

export default useGeolocation;
