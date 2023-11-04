import React from 'react';
import './formSubPopup.css';
import affermImage from '../../images/afferm.png';
import regectmImage from '../../images/regect.png';

const FormSubPopup = ({ info, popupType }) => {
  return (
    <section
      className='formSubPopup'
    >
      <div
        className={`formSubPopup__container ${
          popupType
            ? 'formSubPopup__afferm'
            : 'formSubPopup__negative'
        }`}
      >
        <img src={popupType ? affermImage : regectmImage} alt='иконка' style={{width: '100px', height: '100px'}}/>
        <p className='formSubPopup__text'>{info}</p>
      </div>
    </section>
  );
};

export default FormSubPopup;
