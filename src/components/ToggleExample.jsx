import React from 'react';
import useToggle from '../hooks/useToggle';

const ToggleExample = () => {
  const [isVisible, { toggle, setTrue, setFalse }] = useToggle();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>useToggle Example</h2>

      <button onClick={toggle}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      <button onClick={setTrue} style={{ marginLeft: '1rem' }}>
        Force Show
      </button>

      <button onClick={setFalse} style={{ marginLeft: '1rem' }}>
        Force Hide
      </button>

      {isVisible && <p style={{ marginTop: '1rem' }}>🎉 Toggled content is visible!</p>}
    </div>
  );
};

export default ToggleExample;
