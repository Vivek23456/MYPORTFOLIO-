import { useState, useEffect } from 'react';

export function useDevicePerformance() {
  const [performance, setPerformance] = useState<'high' | 'medium' | 'low'>('high');

  useEffect(() => {
    const detectPerformance = () => {
      // Check if it's a mobile device
      const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 2;

      // Check device memory if available
      const memory = (navigator as any).deviceMemory || 4;

      // Check connection speed if available
      const connection = (navigator as any).connection;
      const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');

      if (isMobile || cores <= 2 || memory <= 2 || isSlowConnection) {
        setPerformance('low');
      } else if (cores <= 4 || memory <= 4) {
        setPerformance('medium');
      } else {
        setPerformance('high');
      }
    };

    detectPerformance();
    window.addEventListener('resize', detectPerformance);
    return () => window.removeEventListener('resize', detectPerformance);
  }, []);

  return performance;
}