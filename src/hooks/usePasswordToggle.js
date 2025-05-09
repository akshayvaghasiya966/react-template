import { useState } from 'react';

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  const type = visible ? 'text' : 'password';

  return { type, visible, toggleVisibility };
};

export default usePasswordToggle;
