'use client';

import { useState, useEffect } from 'react';

const FullScreenToggle = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isFullScreen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFullScreen]);

  return children({ isFullScreen, setIsFullScreen });
};

export default FullScreenToggle;