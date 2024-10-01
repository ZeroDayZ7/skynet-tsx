import React from 'react';
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <marquee behavior="scroll" direction="left">
        Strona w trakcie budowy
      </marquee>
    </div>
  );
};

export default UnderConstruction;
