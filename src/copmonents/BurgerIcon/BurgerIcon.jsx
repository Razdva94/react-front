import React from 'react';
import './burgerIcon.css';

const BurgerIcon = ({handleNavOpen, navOpen}) => {
  
  return (
    <div onClick={handleNavOpen} className={`menu-btn ${navOpen && 'menu-btn_active'}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
