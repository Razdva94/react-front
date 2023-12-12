import React from 'react';
import './action.css';

const Action = () => {
  return (
    <svg className='circle' viewBox='0 0 100 100'>
      <path id='circle' d='M 0,50 a 50,50 0 1,1 0,1 z' fill='none' />
      <line x1='50' y1='50' x2='0' y2='50' stroke='black' strokeWidth='3' />
      <line x1='50' y1='50' x2='0' y2='0' stroke='black' strokeWidth='3' />
      <line x1='50' y1='50' x2='50' y2='0' stroke='black' strokeWidth='3' />
      <line x1='50' y1='50' x2='100' y2='0' stroke='black' strokeWidth='3' />
      <line x1='50' y1='50' x2='100' y2='50' stroke='black' strokeWidth='3' />
      <line x1='50' y1='50' x2='100' y2='100' stroke='black' strokeWidth='3' />
      <line x1='50' y1='50' x2='50' y2='100' stroke='black' strokeWidth='3' />
      <line x1='50' y1='50' x2='0' y2='100' stroke='black' strokeWidth='3' />
      <text className='circle__text'>
        <textPath  xlink:href='#circle'>
          <tspan dy='-10'>Акция! Акция! Акция!</tspan>
        </textPath>
      </text>
    </svg>
  );
};

export default Action;
