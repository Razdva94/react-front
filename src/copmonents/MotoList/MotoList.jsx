import React, { useState, useEffect } from 'react';
import './motoList.css';
import Moto from '../Moto/Moto';
import api from '../../utils/api';

const MotoList = () => {
  const [motorcycle, setMotorcycle] = useState([]);
  console.log(motorcycle);
  const handleDeleteMoto = (motoName) => {
    api
      .deleteMotorcycle(motoName)
      .then((res) => {
        const newArrMoto = motorcycle.filter((moto) => {
          return moto.motoName !== motoName;
        });
        setMotorcycle(newArrMoto);
        localStorage.setItem('motorcycle', JSON.stringify(newArrMoto));
        api.deleteMotoPhotos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api.getMotorcycles().then((res) => {
      console.log(res)
      setMotorcycle(res);
      localStorage.setItem('motorcycle', JSON.stringify(res));
    });
  }, []);
  return (
    <section className='motoList'>
      <div className='motoList__container'>
        <h2 className='motoList__title' id='motorcycles'>
          Мотоциклы
        </h2>
        <h3 className='motoList__subtitle'>Benelli</h3>
        <div
          className='motoList__catalog'
          style={{
            borderBottom: '2px solid rgb(22, 20, 20)',
            paddingBottom: '60px',
          }}
        >
          {motorcycle.length > 0 &&
            motorcycle.map(
              (moto, i) =>
                // Проверка, начинается ли имя мотоцикла с "QJ"
                !moto.motoName.startsWith('QJ') && (
                  <Moto
                    key={i}
                    name={moto.motoName.replaceAll('_', ' ')}
                    price={moto.motoPrice}
                    image={moto.motoLinks[0]}
                    handleDeleteMoto={handleDeleteMoto}
                  />
                ),
            )}
        </div>
        <h3 className='motoList__subtitle'>Benelli QJ</h3>
        <div className='motoList__catalog'>
          {motorcycle.length > 0  &&
            motorcycle.map(
              (moto, i) =>
                moto.motoName.startsWith('QJ') && (
                  <Moto
                    key={i}
                    name={moto.motoName.replaceAll('_', ' ')}
                    price={moto.motoPrice}
                    image={moto.motoLinks[0]}
                    handleDeleteMoto={handleDeleteMoto}
                  />
                ),
            )}
        </div>
      </div>
    </section>
  );
};

export default MotoList;
