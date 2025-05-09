import React from 'react';
import useDeviceDetect from '../hooks/useDeviceDetect';

const DeviceInfo = () => {
  const { isMobile, isTablet, isDesktop, os, userAgent } = useDeviceDetect();

  return (
    <div style={{ padding: '1.5rem', fontFamily: 'monospace' }}>
      <h2>📱 Device & OS Detection</h2>

      <p>Device Type: {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}</p>
      <p>Operating System: {os}</p>

      <h4 style={{ marginTop: '1rem' }}>User Agent:</h4>
      <pre style={{ background: '#f5f5f5', padding: '0.5rem' }}>
        {userAgent}
      </pre>
    </div>
  );
};

export default DeviceInfo;
