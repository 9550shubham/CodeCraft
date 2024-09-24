import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Confetti from 'react-confetti';
import './PopupAlert.css'; 

const PopupAlert = ({ message, onClose }) => {
  const [isConfettiVisible, setConfettiVisible] = useState(true);
  const [confettiClass, setConfettiClass] = useState('confetti-visible');

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiClass('confetti-fade-out');
      setTimeout(() => setConfettiVisible(false), 1000);
    }, 3900);

    return () => clearTimeout(timer);
  }, []);

  return ReactDOM.createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h4>{message}</h4>
        <button onClick={onClose}>Close</button>
      </div>
      {isConfettiVisible && (
        <div className={`confetti-wrapper ${confettiClass}`}>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={300}
            recycle={true}
          />
        </div>
      )}
    </div>,
    document.body
  );
};

export default PopupAlert;
