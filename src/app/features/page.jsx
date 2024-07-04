'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Features = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const toggleFullScreen = (e) => {
    setIsAnimating(true);
    if (e.target.checked) {
      router.push('/app');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 0 : 1 }}
      transition={{ duration: 2 }}
    >
      <section className="feature section" id="feature">
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
      </section>
    </motion.div>
  );
};

export default Features;
