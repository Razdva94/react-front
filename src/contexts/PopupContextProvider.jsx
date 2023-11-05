import React, { useState } from 'react';
import {PopupContext} from './PopupContext';

const PopupContextProvider = ({ children }) => {
  const [popupIsOpened, setPopupIsOpened] = useState(false);

  return (
    <PopupContext.Provider value={{ popupIsOpened,setPopupIsOpened }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;