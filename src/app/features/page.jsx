'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSliding } from '../../components/sidebar/SlidingContext';

const Features = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const { setSliding } = useSliding();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('animate') === 'true') {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        router.replace('/features', undefined, { shallow: true });
      }, 1600); 
    }
  }, [searchParams, router]);

  const toggleFullScreen = (e) => {
    setIsAnimating(true);
    setSliding(true);
    if (e.target.checked) {
      setTimeout(() => {
        router.push('/app');
      }, 2600);
    }
  };

  return (
    <motion.section 
      className="feature section" 
      id="feature"
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 0 : 1 }}
      transition={{ duration: 2.4 }}
    >
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Features</h2>
          </div>
        </div>
        <h1 className="text-2xl mb-4">Wanna see your portfolio?</h1>
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleFullScreen}
          />
          <span className="slider round"></span>
        </label>
      </div>
      {isAnimating && (
        <div className="gif_fi inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <img src="/gifs/coding1.gif" alt="Loading..." />
        </div>
      )}
    </motion.section>
  );
};

export default Features;
