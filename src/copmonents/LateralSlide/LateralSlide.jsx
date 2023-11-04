import React from 'react';
import './LateralSlide.css';
import cross from '../../images/cross.png';
import { Link } from 'react-router-dom';


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
        <Link
          className='lateral-slide__text lateral-slide__text_margin'
          to='/'
          onClick={handleNavOpen}
        >
          Главная
        </Link>
        <Link
          className='lateral-slide__text lateral-slide__text_margin'
          to='/#motorcycles1'
          onClick={handleNavOpen}
        >
          Мотоциклы
        </Link>
        <Link
          className='lateral-slide__text lateral-slide__text_margin'
          to='#footer'
          onClick={handleNavOpen}
        >
          Контакты
        </Link>
      </nav>
    </div>
  );
};

export default LateralSlide;
