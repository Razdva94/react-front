import React, { useContext, useEffect } from 'react';
import './navigation.css';
import api from '../../utils/api';
import { LoggedInContext } from '../../contexts/LoggedInContext';

const Navigation = () => {
  const loggedInContext = useContext(LoggedInContext);

  const onExit = () => {
    localStorage.clear();
    api.getToSignout().then(() => {
      loggedInContext.setLoggedIn(false);
    });
  };
  useEffect(() => {
    if (localStorage.getItem('validated') === 'true') {
      loggedInContext.setLoggedIn(true)
    }
  }, [loggedInContext]);
  return (
    <>
      {!loggedInContext.loggedIn ? (
        <nav className='navigation'>
          <a
            className='navigation__link'
            style={{ marginLeft: 'auto' }}
            href='/'
          >
            Главная
          </a>
          <a className='navigation__link' href='/#motorcycles'>
            Мотоциклы
          </a>
          <a className='navigation__link' href='#footer'>
            Контакты
          </a>
          <p className='navigation__number'>+7(812)456-1903</p>
        </nav>
      ) : (
        <nav className='navigation'>
          <a
            className='navigation__link'
            style={{ marginLeft: 'auto' }}
            href='/admin-add-panel'
          >
            Добавить мотоциклы
          </a>
          <a className='navigation__link' href='/#motorcycles'>
            Удалить Мотоциклы
          </a>
          <a className='navigation__link' href='/' onClick={onExit}>
            Выход
          </a>
          <p className='navigation__number'>+7(812)456-1903</p>
        </nav>
      )}
    </>
  );
};

export default Navigation;
