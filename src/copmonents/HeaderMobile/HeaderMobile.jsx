import React from 'react';
import './header.css';
import logo from '../../images/benelli_icon.png';
import BenelliMobile from '../../images/benelli__mobile-min.webp';

const HeaderMobile = () => {

  return (
    <div className='header__mobile'>
      <img
        src={logo}
        alt='лого'
        className='header__mobileLogo'
      />
      <img
        className='header__mobileImage'
        src={BenelliMobile}
        alt='обложка для мобильника'
      />
      <div className='header__flag'>
        <div
          style={{ backgroundColor: 'green' }}
          className='header__flagSector'
        />
        <div
          className='header__flagSector'
          style={{ backgroundColor: 'white' }}
        />
        <div
          className='header__flagSector'
          style={{ backgroundColor: 'rgb(198, 29, 29)' }}
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
