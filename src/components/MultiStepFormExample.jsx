import React from 'react';
import useMultiStepForm from '../hooks/useMultiStepForm';

const Step1 = () => <div>Step 1: Personal Info</div>;
const Step2 = () => <div>Step 2: Contact Details</div>;
const Step3 = () => <div>Step 3: Review & Submit</div>;

const MultiStepFormExample = () => {
  const {
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    next,
    back,
    totalSteps,
  } = useMultiStepForm([<Step1 />, <Step2 />, <Step3 />]);

  return (
    <div style={{ padding: '2rem', maxWidth: 500, margin: 'auto' }}>
      <h2>🧾 Multi-Step Form</h2>
      <p>Step {currentStepIndex + 1} of {totalSteps}</p>

      <div
        style={{
          padding: '1rem',
          border: '1px solid #ccc',
          marginBottom: '1rem',
        }}
      >
        {step}
      </div>

      <div>
        {!isFirstStep && <button onClick={back}>⬅ Back</button>}
        <button onClick={next} style={{ marginLeft: '1rem' }}>
          {isLastStep ? 'Finish' : 'Next ➡'}
        </button>
      </div>
    </div>
  );
};

export default MultiStepFormExample;
