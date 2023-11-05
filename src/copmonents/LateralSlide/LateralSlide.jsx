import React from 'react';
import './LateralSlide.css';
import cross from '../../images/cross.png';

const LateralSlide = ({ handleNavOpen }) => {
  return (
    <div className='lateral-slide-container'>
      <nav className='lateral-slide'>
        <img
          src={cross}
          alt='закрыть'
          className='lateral-slide__cross'
          onClick={handleNavOpen}
        />
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/'
          onClick={handleNavOpen}
        >
          Главная
        </a>
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/#motorcycles1'
          onClick={handleNavOpen}
        >
          Мотоциклы
        </a>
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='#footer'
          onClick={handleNavOpen}
        >
          Контакты
        </a>
      </nav>
    </div>
  );
};

export default LateralSlide;
