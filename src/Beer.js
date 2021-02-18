import React from 'react';

const Beer = (props) => {
  return (
    <div>
      <div>
        <img src={props.image_url} alt={`image of ${props.name}`} />
      </div>
      <div>
        {props.description}
      </div>
      {props.name}
    </div>
  )
}

export default Beer;
