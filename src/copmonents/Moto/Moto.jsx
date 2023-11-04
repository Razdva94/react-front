import React, {useContext} from 'react';
import './moto.css';
import cross from '../../images/gratis-png-iconos-de-la-computadora-cruzan-eliminar-boton-escritorio-mapa-del-tesoro-thumbnail.png';
import { Link } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext'; 

const Moto = ({ name, price, image, handleDeleteMoto }) => {
  const loggedInContext = useContext(LoggedInContext);
  const url = 'http://localhost:3000/';
  const formattedName = name.replace(/ /g, '_');
  return (
    <article className='moto'>
      {image && (
        <>
          { loggedInContext.loggedIn && (
            <img
              src={cross}
              alt='крест'
              className='moto__cross'
              onClick={() => handleDeleteMoto(name)}
              style={{ backgroundColor: 'red' }}
            />
          )}
          <Link to={`/${formattedName}`} style={{ textDecoration: 'none' }}>
            <div className='moto__imageContainer'>
              <img
                src={`${url}${image}`}
                alt='фото мотоцикла'
                className='moto__image'
              />
            </div>
          </Link>
          <h4 className='moto__name'>{name}</h4>
          <p className='moto__price'>{price}</p>
        </>
      )}
    </article>
  );
};

export default Moto;
