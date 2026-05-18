import React from 'react';

const MagneticButton = ({ children, className = '', onClick }) => {
  return (
    <button
      className={`px-6 py-3 rounded-full font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-115 active:scale-[0.98] shadow-sm hover:shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
