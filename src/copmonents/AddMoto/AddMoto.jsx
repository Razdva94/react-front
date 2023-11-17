import React, { useState } from 'react';
import './addMoto.css';
import useForm from '../../hooks/useForm';
import api from '../../utils/api';
import FormSubPopup from '../FormSubPopup/FormSubPopup';
import {
  PERFORMANCE_NAME,
  PERFORMANCE,
  PARAGRAPHS,
  PARAGRAPHS_NAME,
  PARAGRAPHS_CHANGED,
} from '../../utils/constants';

const AddMoto = () => {
  const [popupState, setPopupState] = useState(false);
  const [info, setInfo] = useState([]);
  const { values, handleChange } = useForm();
  function openPopup() {
    setTimeout(() => setPopupState(false), 2000);
  }

  //  добавлениe мотоцикла
  const [files, setFiles] = useState([]);

  const handleFileLoad = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo([`Загрузка информации на сервер`, 'loading']);
    setPopupState(true);
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

    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`images`, file);
      });

      api
        .postMotoPhotos(formData, motoName)
        .then((res) => {
          const motoLinks = res.map((moto) => moto.path);
          api
            .postMotorcycles(
              motoName,
              motoPrice,
              description,
              motoPerformance,
              motoLinks,
            )
            .then(() => {
              api
                .getMotorcycles()
                .then((res) => {
                  localStorage.setItem('motorcycle', JSON.stringify(res));
                  setInfo([
                    `Информация о мотоцикле загружена на\u00a0сервер`,
                    'afferm',
                  ]);
                  openPopup();
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
              setInfo(['Что-то пошло не так', 'regect']);
              openPopup();
            });
        })
        .catch((err) => {
          console.log(err);
          setInfo(['Не установлена связь с сервером', 'regect']);
          openPopup();
        });
    } else {
      setInfo(['Не выбраны фотографии', 'regect']);
      openPopup();
    }
  };

  // сабмит формы изменения
  const [changedFiles, setChangedFiles] = useState([]);

  const handleChangedFileLoad = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setChangedFiles(selectedFiles);
  };

  const handleSubmitChanged = (e) => {
    e.preventDefault();
    setInfo([`Загрузка информации на сервер`, 'loading']);
    setPopupState(true);
    const {
      paragraphChanged1,
      paragraphChanged2,
      paragraphChanged3,
      paragraphChanged4,
      paragraphChanged5,
      paragraphChanged6,
      paragraphChanged7,
      paragraphChanged8,
      paragraphChanged9,
      paragraphChanged10,
      motoNameChanged,
      motoPriceChanged,
    } = values;

    const description = [
      paragraphChanged1,
      paragraphChanged2,
      paragraphChanged3,
      paragraphChanged4,
      paragraphChanged5,
      paragraphChanged6,
      paragraphChanged7,
      paragraphChanged8,
      paragraphChanged9,
      paragraphChanged10,
    ].filter(
      (pharagraph) => typeof pharagraph === 'string' && pharagraph !== '',
    );
    const motorcycles = JSON.parse(localStorage.getItem('motorcycle'));
    const formData = new FormData();
    changedFiles.forEach((file, index) => {
      formData.append(`images`, file);
    });

    const motorcycle = motorcycles.find((moto) => {
      return moto.motoName === motoNameChanged;
    });

    if (changedFiles.length > 0) {
      api
        .deleteMotoPhotos(motorcycle.motoLinks)
        .then(() => {
          api
            .postMotoPhotos(formData, motoNameChanged)
            .then((res) => {
              const motoLinks = res.map((moto) => moto.path);
              api
                .changeMotoInfo(
                  motoNameChanged,
                  motoPriceChanged,
                  description,
                  motoLinks,
                )
                .then(() => {
                  api
                    .getMotorcycles()
                    .then((res) => {
                      localStorage.setItem('motorcycle', JSON.stringify(res));
                      setInfo([`Информация о мотоцикле изменена`, 'afferm']);
                      openPopup();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                  setInfo(['Что-то пошло не так', 'regect']);
                  openPopup();
                });
            })
            .catch((err) => {
              console.log(err);
              setInfo(['Что-то пошло не так', 'regect']);
              openPopup();
            });
        })
        .catch((err) => {
          console.log(err);
          setInfo(['Что-то пошло не так', 'regect']);
          openPopup();
        });
    } else {
      api
        .changeMotoInfo(motoNameChanged, motoPriceChanged, description)
        .then(() => {
          api
            .getMotorcycles()
            .then((res) => {
              localStorage.setItem('motorcycle', JSON.stringify(res));
              setInfo([`Информация о мотоцикле изменена`, 'afferm']);
              openPopup();
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          if (err.message) {
            setInfo([`${err.message}`, 'regect']);
          } else {
            setInfo(['Что-то пошло не так', 'regect']);
          }
          openPopup();
        });
    }
  };
  return (
    <>
      <section className='addMoto'>
        <div className='addMoto__container'>
          <form onSubmit={handleSubmit} className='addMoto__form'>
            <h3 className='addMoto__title'>Добавление мотоцикла</h3>
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
            <label className='addMoto__label'>Цена мотоцикла</label>
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
              {PERFORMANCE.map((name, i) => {
                return (
                  <li key={i}>
                    <input
                      onChange={handleChange}
                      name={name}
                      placeholder={PERFORMANCE_NAME[i]}
                      type='text'
                      className='addMoto__sublabel'
                      required
                    />
                  </li>
                );
              })}
            </ul>
            <label className='addMoto__label'>
              Описание (втавлять по абзацу в каждую форму)
            </label>
            <ul className='addMoto__sublabelContainer'>
              {PARAGRAPHS.map((paragraph, i) => {
                return (
                  <li key={i}>
                    <input
                      onChange={handleChange}
                      name={paragraph}
                      placeholder={PARAGRAPHS_NAME[i]}
                      type='text'
                      className='addMoto__sublabel'
                    />
                  </li>
                );
              })}
            </ul>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => handleFileLoad(e)}
              name='image'
              multiple
            />
            <button type='submit' className='addMoto__button'>
              Отправить форму
            </button>
          </form>
          {/* Изменение мотоцикла */}
          <form className='addMoto__form' onSubmit={handleSubmitChanged}>
            <h3 className='addMoto__title'>Изменение мотоцикла</h3>
            <label className='addMoto__label'>
              Название мотоцикла (английский язык)
            </label>
            <input
              onChange={handleChange}
              className='addMoto__input'
              name='motoNameChanged'
              type='text'
              required
            ></input>
            <label className='addMoto__label'>Цена мотоцикла</label>
            <input
              onChange={handleChange}
              className='addMoto__input'
              name='motoPriceChanged'
              type='text'
            ></input>
            <label className='addMoto__label'>
              Описание (втавлять по абзацу в каждую форму)
            </label>
            <ul className='addMoto__sublabelContainer'>
              {PARAGRAPHS_CHANGED.map((paragraph, i) => {
                return (
                  <li key={i}>
                    <input
                      onChange={handleChange}
                      name={paragraph}
                      placeholder={PARAGRAPHS_NAME[i]}
                      type='text'
                      className='addMoto__sublabel'
                    />
                  </li>
                );
              })}
            </ul>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => handleChangedFileLoad(e)}
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
