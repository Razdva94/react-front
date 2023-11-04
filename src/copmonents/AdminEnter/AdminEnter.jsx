import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminEnter.css';
import FormSubPopup from '../FormSubPopup/FormSubPopup';
import useForm from '../../hooks/useForm';
import api from '../../utils/api';
import { LoggedInContext } from '../../contexts/LoggedInContext';

const AdminEnter = () => {
  const loggedInContext = useContext(LoggedInContext);


  const { values, handleChange } = useForm({
    password: '',
    login: '',
  });
  const navigate = useNavigate();
  const [popupState, setPopupState] = useState(false);
  function openPopup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setPopupState(false);
        resolve();
      }, 2000);
    });
  }
  const [info, setInfo] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, login } = values;
    api
      .postToSignin(password, login)
      .then(() => {
        setInfo([`Вы успешно аутентифицировались`, true]);
        localStorage.setItem('validated', 'true');
        setPopupState(true);
        loggedInContext.setLoggedIn(true)
        openPopup()
      })
      .catch((err) => {
        console.log(err)
        setInfo(['Что-то пошло не так', false]);
        setPopupState(true);
        openPopup();
      });
  };

  return (
    <>
      <section className='adminEnter'>
        <div className='adminEnter__container'>
          <form onSubmit={handleSubmit} className='adminEnter__form'>
            <h2>Вход для администратора</h2>
            <input
              type='text'
              placeholder='Введите логин'
              className='adminEnter__input'
              name='login'
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Введите пароль'
              className='adminEnter__input'
              onChange={handleChange}
            />
            <button type='submit' className='adminEnter__button'>
              Войти
            </button>
          </form>
        </div>
      </section>
      {popupState && <FormSubPopup info={info[0]} popupType={info[1]} />}
    </>
  );
};

export default AdminEnter;
