import React from 'react';

const AmbientBlobs = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] mix-blend-multiply opacity-70"></div>
    <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/30 blur-[100px] mix-blend-multiply opacity-50"></div>
  </div>
);

export default AmbientBlobs;
