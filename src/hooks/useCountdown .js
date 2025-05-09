import { useEffect, useState, useRef } from 'react';

const useCountdown = (initialSeconds, onEnd = () => {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return; // already running
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          onEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    pause();
    setSeconds(initialSeconds);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  return {
    seconds,
    start,
    pause,
    reset,
    isRunning: intervalRef.current !== null,
  };
};

export default useCountdown;
