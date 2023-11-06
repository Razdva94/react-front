import React from 'react';
import './LateralSlide.css';
import BenelliIcon from '../../images/benelli_icon.png';

const LateralSlide = ({ handleNavOpen, navOpen }) => {
  return (
    <div className={`${navOpen && 'lateral-slide__container'}`}>
      <nav className={`lateral-slide ${!navOpen && 'slide-out'}`}>
        <img class='lateral-slide__icon' src={BenelliIcon} alt='logo' />
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/'
          onClick={handleNavOpen}
        >
          Главная
        </a>
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/#motorcycles'
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
