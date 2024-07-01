'use client';

import { motion, AnimatePresence } from 'framer-motion';

const FeaturesContent = ({ isFullScreen, setIsFullScreen }) => {
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <AnimatePresence>
      {!isFullScreen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="p-4"
        >
          <h1 className="text-2xl mb-4">Wanna see your portfolio?</h1>
          <label className="switch">
            <input type="checkbox" onChange={toggleFullScreen} />
            <span className="slider round"></span>
          </label>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black text-white p-8"
        >
          <h1 className="text-4xl mb-4">Your Portfolio</h1>
          {/* Add your portfolio content here */}
          <button
            onClick={toggleFullScreen}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Go Back
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeaturesContent;