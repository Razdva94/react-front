import React, {useState} from 'react';
import './burgerIcon.css';

const BurgerIcon = () => {
  
  const [isOpened, setIsOpened] = useState(false)

  const handleClick = () =>{
    setIsOpened(!isOpened)
  }
  return (
    <div onClick={handleClick} class={`menu-btn ${isOpened && 'menu-btn_active'}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
