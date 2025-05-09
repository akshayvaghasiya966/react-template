import React from 'react';
import useAsync from '../hooks/useAsync';

const wait = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(`✅ Done after ${ms}ms`), ms));

const AsyncExample = () => {
  const { execute, loading, error, value } = useAsync(() => wait(2000), false);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>⏳ Fake Task (No API)</h2>
      
      <button onClick={() => execute()} disabled={loading}>
        {loading ? 'Working...' : 'Start Task'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {value && <p>{value}</p>}
    </div>
  );
};

export default AsyncExample;
