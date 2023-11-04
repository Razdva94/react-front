import React, { useState } from 'react';
import './orderButton.css';
import Popup from '../../Popup/Popup';

const OrderButton = ({ image, name }) => {
  const [opened, setOpened] = useState(false);
  const handleClickOpen = () => {
    setOpened(true); 
  };
  const handleClickClose = () => {
    setOpened(false);
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
