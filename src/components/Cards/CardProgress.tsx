import React, { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--value'?: number;
}

interface dataProps {
    skill : string;
}

const CardProgress: React.FC<dataProps> = (props) => {
  return (
    <div className="card w-full shadow-lg">
      <div className="card-body text-center">
        <h1 className="text-xl font-semibold">{props.skill}</h1>
        {/* <div 
          className="radial-progress text-primary shadow-lg font-semibold" 
          style={{ '--value': props.score } as CustomCSSProperties} 
          role="progressbar" 
          aria-valuenow={props.score} 
          aria-valuemin={0} 
          aria-valuemax={100}
        >
          {props.score}%
        </div> */}
      </div>
    </div>
  );
}

export default CardProgress;
