import React, { useState, useContext } from 'react';
import './header.css';
import logo from '../../images/benelli_icon.png';
import Navigation from '../Navigation/Navigation';
import LateralSlide from '../LateralSlide/LateralSlide';
import { PopupContext } from '../../contexts/PopupContext';
import BurgerIcon from '../BurgerIcon/BurgerIcon';

const Header = () => {
  const popupContext = useContext(PopupContext);

  const [navOpen, setNavOpen] = useState(false);
  const [playSlide, setPlaySlide] = useState(false);
  console.log(navOpen, playSlide)

  const handleNavOpen = () => {
    if (navOpen) {
      setPlaySlide(!playSlide);
    }
    setTimeout(() => {
      setNavOpen(!navOpen);
    }, 500);
  };

  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='header__imageContainer'>
            <img src={logo} alt='лого' className='header__logo' />
          </div>
          <Navigation />
        </div>
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
      </header>
      {!popupContext.popupIsOpened && (
        <div className='header__mobileBurger'>
          <BurgerIcon handleNavOpen={handleNavOpen} navOpen={navOpen} />
        </div>
      )}
      {navOpen && (
        <LateralSlide handleNavOpen={handleNavOpen} playSlide={playSlide} />
      )}
    </>
  );
};

export default Header;
