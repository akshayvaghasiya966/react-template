import React from 'react';
import useGeolocation from '../hooks/useGeolocation';

const GeoComponent = () => {
    const geoOptions = {
        enableHighAccuracy: true,
        timeout: 10000,      // 10 seconds
        maximumAge: 0        // don't use cached location
      };
  const { position, error, loading } = useGeolocation(geoOptions);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📍 Your Location</h2>
      {loading && <p>Getting location...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {position && (
        <>
          <p>Latitude: {position.latitude}</p>
          <p>Longitude: {position.longitude}</p>
          <p>Accuracy: ±{position.accuracy} meters</p>
        </>
      )}
    </div>
  );
};

export default GeoComponent;
