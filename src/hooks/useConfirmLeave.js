import { useEffect } from 'react';

const useConfirmLeave = (shouldWarn = false, message = 'You have unsaved changes. Are you sure you want to leave?') => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!shouldWarn) return;

      e.preventDefault();
      e.returnValue = message; // For most modern browsers
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [shouldWarn, message]);
};

export default useConfirmLeave;
