import React, {useEffect} from 'react';
import './LateralSlide.css';
import BenelliIcon from '../../images/benelli_icon.png';

const LateralSlide = ({ handleNavOpen, playSlide, navOpen }) => {
  const [startAnimation, setStartAnimation] = React.useState(true);
  useEffect(() => {
    const delay = 500;
    const timeoutId = setTimeout(() => {
      setStartAnimation(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);
  console.log(playSlide)
  return (
    <div className={`${navOpen && 'lateral-slide__container'}`}>
      <nav
        className={`${startAnimation && 'slide'} ${
          navOpen ? 'slide_opened' : 'slide_closed'
        }`}
      >
        <img className='lateral-slide__icon' src={BenelliIcon} alt='logo' />
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/'
          onClick={handleNavOpen}
        >
          Главная
        </a>
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='/#motorcycles'
          onClick={handleNavOpen}
        >
          Мотоциклы
        </a>
        <a
          className='lateral-slide__text lateral-slide__text_margin'
          href='#footer'
          onClick={handleNavOpen}
        >
          Контакты
        </a>
      </nav>
    </div>
  );
};

export default LateralSlide;
