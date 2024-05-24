import React, { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--value'?: number;
}

const CardProgress = () => {
  return (
    <div className="card w-full shadow-lg">
      <div className="card-body text-center">
        <h1>HTML</h1>
        <div 
          className="radial-progress" 
          style={{ '--value': 70 } as CustomCSSProperties} 
          role="progressbar" 
          aria-valuenow={70} 
          aria-valuemin={0} 
          aria-valuemax={100}
        >
          70%
        </div>
      </div>
    </div>
  );
}

export default CardProgress;
