import React from 'react';
import './Beer.css';

const Beer = (props) => {
  return (
    <div class='beerTile'>
      <div class='beer'>
        <img src={props.image_url} class='beerImage' alt={`image of ${props.name}`} />
        <p class='beerDescr'>
        {props.description}
        </p>
      </div>
      <div class='beerName'>
        {props.name}
      </div>
    </div>
  )
}

export default Beer;
