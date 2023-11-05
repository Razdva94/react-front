/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './preloader.css';
import { ThreeCircles } from 'react-loader-spinner';

function Preloader() {
  return (
    <>
      <div className='preloader'>
        <ThreeCircles
          height='150'
          width='150'
          color='red'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          ariaLabel='three-circles-rotating'
          outerCircleColor='green'
          innerCircleColor='white'
          middleCircleColor='red'
        />
      </div>
    </>
  );
}

export default Preloader;
