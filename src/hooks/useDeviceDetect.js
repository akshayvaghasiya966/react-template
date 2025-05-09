import { useState, useEffect } from 'react';

const getOS = (userAgent) => {
  if (/windows phone/i.test(userAgent)) return 'Windows Phone';
  if (/win/i.test(userAgent)) return 'Windows';
  if (/android/i.test(userAgent)) return 'Android';
  if (/iPad|iPhone|iPod/.test(userAgent)) return 'iOS';
  if (/mac/i.test(userAgent)) return 'Mac OS';
  if (/linux/i.test(userAgent)) return 'Linux';
  return 'Unknown';
};

const useDeviceDetect = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    userAgent: '',
    os: 'Unknown',
  });

  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    const isMobile = /Mobi|Android/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;
    const os = getOS(userAgent);

    setDeviceInfo({
      isMobile,
      isTablet,
      isDesktop,
      userAgent,
      os,
    });
  }, []);

  return deviceInfo;
};

export default useDeviceDetect;
