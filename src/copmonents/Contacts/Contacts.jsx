import React from 'react';
import './contacts.css';
import building from '../../images/benelli__building.webp';
import mobileBuilding from '../../images/building__mobile.webp';

const Contacts = () => {
  return (
    <section className='contacts'>
      <img src={building} alt='здание' className='contacts__building' />
      <img src={mobileBuilding} alt='здание' className='contacts__building-mobile' />
    </section>
  );
};

export default Contacts;
