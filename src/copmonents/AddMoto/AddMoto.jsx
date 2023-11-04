import React, { useState } from 'react';
import './addMoto.css';
import useForm from '../../hooks/useForm';
import api from '../../utils/api';
import FormSubPopup from '../FormSubPopup/FormSubPopup';

const AddMoto = () => {
  const [files, setFiles] = useState([]);
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };
  const [popupState, setPopupState] = useState(false);
  const [info, setInfo] = useState([]);
  const { values, handleChange } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      compressionRation,
      gazValue,
      mass,
      motoName,
      motoPrice,
      operatedValue,
      paragraph1,
      paragraph2,
      paragraph3,
      paragraph4,
      paragraph5,
      paragraph6,
      paragraph7,
      paragraph8,
      paragraph9,
      paragraph10,
      power,
      seatHeight,
      sizes,
      torque,
      wheel,
    } = values;
    const motoPerformance = {
      compressionRation,
      gazValue,
      mass,
      operatedValue,
      power,
      seatHeight,
      sizes,
      torque,
      wheel,
    };
    const description = [
      paragraph1,
      paragraph2,
      paragraph3,
      paragraph4,
      paragraph5,
      paragraph6,
      paragraph7,
      paragraph8,
      paragraph9,
      paragraph10,
    ].filter(
      (pharagraph) => typeof pharagraph === 'string' && pharagraph !== '',
    );

    function openPopup() {
      setTimeout(() => setPopupState(false), 2000);
    }

    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`images`, file);
      });

      api.postMotoPhotos(formData, motoName).then((res) => {
        const motoLinks = res.map((moto) => moto.path)
        api
          .postMotorcycles(
            motoName,
            motoPrice,
            description,
            motoPerformance,
            motoLinks,
          )
          .then(() => {
            setInfo([`Информация о мотоцикле загружена на\u00a0сервер`, true]);
            setPopupState(true);
            openPopup();
          })
          .catch((err) => {
            console.log(err);
            setInfo(['Что-то пошло не так', false]);
            setPopupState(true);
            openPopup();
          });
      });
    }
  };
  return (
    <>
      <section className='addMoto'>
        <div className='addMoto__container'>
          <form onSubmit={handleSubmit} className='addMoto__form'>
            <h3 className='addMoto__title'>Данные мотоцикла</h3>
            <label className='addMoto__label'>
              Название мотоцикла (английский язык)
            </label>
            <input
              onChange={handleChange}
              className='addMoto__input'
              name='motoName'
              type='text'
              required
            ></input>
            <label className='addMoto__label'>
              Цена мотоцикла
            </label>
            <input
              onChange={handleChange}
              className='addMoto__input'
              name='motoPrice'
              type='text'
              required
            ></input>
            <label className='addMoto__label'>
              Характеристики мотоцикла (число без наименования)
            </label>
            <ul className='addMoto__sublabelContainer'>
              <li>
                <input
                  onChange={handleChange}
                  name='mass'
                  placeholder='Снаряженная масса, кг'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='sizes'
                  placeholder='Д/Ш/В, мм'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='wheel'
                  placeholder='Колесная база, мм'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='seatHeight'
                  placeholder='Высота сиденья, мм'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='gazValue'
                  placeholder='Объем бензобака, л'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='operatedValue'
                  placeholder='Рабочий объем, см³'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='compressionRation'
                  placeholder='Степень сжатия'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='power'
                  placeholder='Мощность, лс при об/мин'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='torque'
                  placeholder='Крутящий момент, Нм при об/мин'
                  type='text'
                  className='addMoto__sublabel'
                  required
                />
              </li>
            </ul>
            <label className='addMoto__label'>
              Описание (втавлять по абзацу в каждую форму)
            </label>
            <ul className='addMoto__sublabelContainer'>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph1'
                  placeholder='1 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph2'
                  placeholder='2 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph3'
                  placeholder='3 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph4'
                  placeholder='4 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph5'
                  placeholder='5 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph6'
                  placeholder='6 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph7'
                  placeholder='7 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph8'
                  placeholder='8 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph9'
                  placeholder='9 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
              <li>
                <input
                  onChange={handleChange}
                  name='paragraph10'
                  placeholder='10 абзац'
                  type='text'
                  className='addMoto__sublabel'
                />
              </li>
            </ul>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => handleFileChange(e)}
              name='image'
              multiple
            />
            <button type='submit' className='addMoto__button'>
              Отправить форму
            </button>
          </form>
        </div>
      </section>
      {popupState && <FormSubPopup info={info[0]} popupType={info[1]} />}
    </>
  );
};

export default AddMoto;
