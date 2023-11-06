import React from 'react';
import './formSubPopup.css';
import affermImage from '../../images/afferm.png';
import regectmImage from '../../images/regect.png';
import loader from '../../images/ajax-loader.gif';

const FormSubPopup = ({ info, popupType }) => {
  console.log(popupType);
  return (
    <section className='formSubPopup'>
      <div
        className={`formSubPopup__container ${
          popupType === 'afferm'
            ? 'formSubPopup__afferm'
            : popupType === 'loading'
            ? 'formSubPopup__loading'
            : 'formSubPopup__negative'
        }`}
      >
        <img
          src={
            popupType === 'afferm'
              ? affermImage
              : popupType === 'loading'
              ? loader
              : regectmImage
          }
          alt='иконка'
          style={{ width: '100px', height: '100px' }}
        />
        <p className='formSubPopup__text'>{info}</p>
      </div>
    </section>
  );
};

export default FormSubPopup;
