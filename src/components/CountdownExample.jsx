import React from 'react';
import useCountdown from '../hooks/useCountdown ';

const CountdownExample = () => {
  const { seconds, start, pause, reset, isRunning } = useCountdown(10, () =>
    alert('⏰ Time’s up!')
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Countdown: {seconds}s</h2>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={pause} disabled={!isRunning} style={{ marginLeft: '0.5rem' }}>Pause</button>
      <button onClick={reset} style={{ marginLeft: '0.5rem' }}>Reset</button>
    </div>
  );
};

export default CountdownExample;
