import React from 'react';
import '../stylesheets/testimony.css';

function Testimony(props) {
  return (
    <div className='testimony-container'>
      <img
        className='testimony-image'
        src={require(`../img/testimony-${props.image}.png`)}
        alt='Picture Of Emma'
      />
      <div className='testimony-text-container'>
        <p className='testimony-name'>
          <strong>{props.name}</strong> from {props.country}
        </p>
        <p className='testimony-position'>
          {props.position} in <strong>{props.company}</strong>
        </p>
        <p className='testimony-text'>'{props.testimony}'</p>
      </div>
    </div>
  );
}

export default Testimony;