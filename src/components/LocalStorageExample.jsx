import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LocalStorageExample = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</h2>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
};

export default LocalStorageExample;
