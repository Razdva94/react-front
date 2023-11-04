import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './motoCard.css';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './style.css';
import { PERFORMANCE_NAME } from '../../utils/constants';
import { useParams } from 'react-router-dom';
import OrderButton from './OrderButton/OrderButton';
const { Navigation, Zoom, Thumbs, FreeMode } = require('swiper/modules');
const { Swiper, SwiperSlide } = require('swiper/react');

const MotoCard = () => {
  const { params } = useParams();
  const location = useLocation();
  const url = 'http://localhost:3000/';
  const [motorcycles, setMotorcycles] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem('motorcycle');

    if (storedData) {
      const motorcycleData = JSON.parse(storedData);
      setMotorcycles(motorcycleData);
    }
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  if (motorcycles.length > 0) {
    console.log(thumbsSwiper);
    const motorcycle = motorcycles.find((moto) => {
      return moto.motoName === params.replace(/_/g, ' ');
    });
    if (motorcycle) {
      const { motoLinks, description, motoName, motoPerformance, motoPrice } =
        motorcycle;
      const formattedMotoName = motoName.replace(/_/g, ' ');
      const motoPerformanceArray = Object.values(motoPerformance);
      return (
        <section className='motoCard'>
          <div className='motoCard__container'>
            <nav className='motoCard__linkContainer'>
              <Link href='' className='motoCard__link'>
                Главная &nbsp;/
              </Link>
              <Link href='' className='motoCard__link'>
                &nbsp;&nbsp;Мотоциклы&nbsp;&nbsp; /
              </Link>
              <p style={{ cursor: 'auto' }} className='motoCard__link'>
                &nbsp;&nbsp;{formattedMotoName}
              </p>
            </nav>
            <div className='motoCard__wrapper'>
              <div className='motoCard__catalogContainer'>
                <h3 className='motoCard__title'>
                  Мотоцикл <br />
                  {formattedMotoName}
                </h3>
                <>
                  {motoLinks && (
                    <Swiper
                      style={{
                        height: 'fit-content',
                        marginLeft: '0',
                        '--swiper-navigation-color': 'var(--main-orange)',
                        '--swiper-pagination-color': 'var(--main-orange)',
                      }}
                      zoom={true}
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      navigation={true}
                      modules={[FreeMode, Navigation, Zoom, Thumbs]}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      className='mySwiper2'
                    >
                      {motoLinks.map((el, i) => {
                        return (
                          <div
                            key={`catalog_${i}`}
                            className='motoCard__pictureContainer'
                          >
                            <SwiperSlide key={i}>
                              <div className='swiper-zoom-container'>
                                <img
                                  className='motoCard__image'
                                  src={`${url}${el}`}
                                  alt='мото'
                                />
                              </div>
                            </SwiperSlide>
                          </div>
                        );
                      })}
                    </Swiper>
                  )}
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='mySwiper'
                  >
                    {motoLinks.map((el, i) => {
                      return (
                        <div
                          key={`thumbs_${i}`}
                          className='motoCard__pictureContainer-mini'
                        >
                          <SwiperSlide key={i}>
                            <div className='swiper-zoom-container-mini'>
                              <img
                                className='motoCard__image'
                                src={`${url}${el}`}
                                alt='мотик'
                              />
                            </div>
                          </SwiperSlide>
                        </div>
                      );
                    })}
                  </Swiper>
                </>
              </div>
              <div className='motoCard__textContainer'>
                <h3
                  className='motoCard__title'
                  style={{ borderBottom: '2px solid var(--main-orange)' }}
                >
                  Технические характеристики
                </h3>
                {PERFORMANCE_NAME.map((el, i) => {
                  return (
                    <div key={`performance_${i}`} className='motoCard__cell'>
                      <h4 className='motoCard__miniTitle'>{el}</h4>
                      <p className='motoCard__performanceText'>
                        {motoPerformanceArray[i]}
                      </p>
                    </div>
                  );
                })}
                <div className='motoCard__orderContainer'>
                  <p className='motoCard__price'>{motoPrice}</p>
                  {motoLinks && (
                    <OrderButton
                      image={motoLinks[0]}
                      name={formattedMotoName}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className='motoCard__textContainer'>
              {description &&
                description.map((text, i) => {
                  return (
                    <p key={`description_${i}`} className='motoCard__text'>
                      {text}
                    </p>
                  );
                })}
            </div>
          </div>
        </section>
      );
    }
  } else {
    console.log('Мотоцикл не найден');
    <h1>не найден</h1>;
  }
};
export default MotoCard;
