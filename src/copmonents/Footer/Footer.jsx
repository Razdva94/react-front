import React from 'react';
import './footer.css';
import logo from '../../images/benelli_icon.png';
import gerb from '../../images/coat-st-petersburg.png';
import telegram from '../../images/telega.png';

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='footer__container'>
        <div className='footer__imageContainer'>
          <img
            src={logo}
            alt='лого'
            className='footer__logo'
          />
        </div>
        <div className='footer__textContainer'>
          <p
            className='footer__text'
            style={{ textTransform: 'uppercase' }}
          >
            Мотоцентр Арсенал
          </p>
          <p className='footer__text'>Официальный дилер BENELLI</p>
          <p className='footer__text'>в Санкт-Петербурге</p>
        </div>
        <div className='footer__textContainer'>
          <p className='footer__text'>
            Пискаревский проспект 144АК
          </p>
          <p className='footer__text'>+7(812) 456-1903</p>
          <a
            href='https://t.me/+J-rVqZHkc-BjOGNi'
            className='footer__link'
            target='_blank' rel="noreferrer"
          >
            Телеграм
            <img
              src={telegram}
              alt='телега'
              className='footer__icon'
             
            />
          </a>
        </div>
        <img
          src={gerb}
          alt='герб'
          className='footer__logo'
          style={{width: '100px'}}
        />
      </div>
    </footer>
  );
};

export default Footer;

// Официальный  дилер BENELLI
// в Санкт-Петербурге

// Пискаревский проспект 144АК
// +7(812) 456-1903