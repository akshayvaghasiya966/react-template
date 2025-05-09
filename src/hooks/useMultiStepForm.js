import { useState } from 'react';

const useMultiStepForm = (steps = []) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => (i < steps.length - 1 ? i + 1 : i));
  };

  const back = () => {
    setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
  };

  const goTo = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    back,
    goTo,
    totalSteps: steps.length,
  };
};

export default useMultiStepForm;
