import React, { useEffect, useState } from 'react';
import './LateralSlide.css';
import BenelliIcon from '../../images/benelli_icon.png';

const LateralSlide = ({ handleNavOpen, navOpen }) => {
  const [invisible, setInvisible] = useState(false);
  const [exists, setExists] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInvisible(true);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setExists(true);
    }, 500);
  }, []);

  return (
    <div className={`${navOpen && 'lateral-slide__container'}`}>
      <nav
        className={`lateral-slide ${!navOpen && 'slide-out'} 
        ${invisible && 'lateral-slide_visible'} 
        ${exists && 'lateral-slide_exist'}`}
      >
        <img className='lateral-slide__icon' src={BenelliIcon} alt='logo' />
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
