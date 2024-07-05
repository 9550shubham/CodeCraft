// SlidingContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SlidingContext = createContext();

export const SlidingProvider = ({ children }) => {
  const [sliding, setSliding] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/features') {
      setSliding(false);
    }
  }, [pathname]);

  return (
    <SlidingContext.Provider value={{ sliding, setSliding }}>
      {children}
    </SlidingContext.Provider>
  );
};

export const useSliding = () => {
  const context = useContext(SlidingContext);
  if (context === undefined) {
    throw new Error('useSliding must be used within a SlidingProvider');
  }
  return context;
};