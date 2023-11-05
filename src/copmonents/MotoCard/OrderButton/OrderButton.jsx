import React, { useState, useContext } from 'react';
import './orderButton.css';
import Popup from '../../Popup/Popup';
import { PopupContext } from '../../../contexts/PopupContext';

const OrderButton = ({ image, name }) => {
  const popupContext = useContext(PopupContext)
  const [opened, setOpened] = useState(false);
  const handleClickOpen = () => {
    setOpened(true); 
    popupContext.setPopupIsOpened(true)
  };
  const handleClickClose = () => {
    setOpened(false);
    popupContext.setPopupIsOpened(false)
  }

  return (
        <>
          <button
            type='button'
            className='orderButton'
            onClick={handleClickOpen}
          >
            Заказать онлайн
          </button>
          <Popup image={image} name={name} onClose={handleClickClose} open={opened}/>
        </>
  );
};

export default OrderButton;
