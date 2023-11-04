import React, {useState} from 'react';
import './header.css';
import logo from '../../images/benelli_icon.png'
import Navigation from '../Navigation/Navigation';
import LateralSlide from '../LateralSlide/LateralSlide';
import burger from '../../images/burger.png';


const Header = () => {

  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='header__imageContainer'>
            <img
              src={logo}
              alt='лого'
              className='header__logo'
            />
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
      <img
        src={burger}
        alt='burger'
        className='header__mobileBurger'
        onClick={handleNavOpen}
      />
      {navOpen && <LateralSlide handleNavOpen={handleNavOpen}/>}
    </>
  );
};

export default Header;
