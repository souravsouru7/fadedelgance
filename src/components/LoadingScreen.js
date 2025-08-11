'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img 
          src="/Faded Elegance Logo-05.png" 
          alt="Faded Elegance Logo" 
          className="loading-logo"
        />
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
