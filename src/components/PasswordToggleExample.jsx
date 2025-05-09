import React from 'react';
import usePasswordToggle from '../hooks/usePasswordToggle';

const PasswordToggleExample = () => {
  const { type, visible, toggleVisibility } = usePasswordToggle();

  return (
    <div style={{ marginTop: '2rem' }}>
      <label>Password:</label><br />
      <input type={type} placeholder="Enter password" />
      <button
        type="button"
        onClick={toggleVisibility}
        style={{
          marginLeft: '1rem',
          padding: '0.25rem 0.5rem',
          cursor: 'pointer'
        }}
      >
        {visible ? '🙈 Hide' : '👁️ Show'}
      </button>
    </div>
  );
};

export default PasswordToggleExample;
