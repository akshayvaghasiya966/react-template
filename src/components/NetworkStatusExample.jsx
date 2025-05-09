import React from 'react';
import useNetworkStatus from '../hooks/useNetworkStatus';

const NetworkStatusExample = () => {
  const { isOnline, type, downlink, rtt } = useNetworkStatus();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🌐 Network Status</h2>
      <p>Status: <strong>{isOnline ? '🟢 Online' : '🔴 Offline'}</strong></p>
      {type && (
        <>
          <p>Connection Type: {type}</p>
          <p>Downlink: {downlink} Mbps</p>
          <p>RTT: {rtt} ms</p>
        </>
      )}
    </div>
  );
};

export default NetworkStatusExample;
