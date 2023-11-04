import React from 'react';
import  './videoComponent.css';
import video from '../../video/Benelli.mp4';


const VideoComponent = () => {
  return (
    <section>
      <video width='1080' height='360'controls autoPlay muted className='videoComponent'>
        <source src={video} type='video/mp4' />
        Ваш браузер не поддерживает тег video.
      </video>
    </section>
  );
};

export default VideoComponent;
