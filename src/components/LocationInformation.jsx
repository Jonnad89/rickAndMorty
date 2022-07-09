import React from 'react';

const LocationInformation = ({ name, dimension, type, population }) => {
  return (
    <div>
      <ul>
        <div className='location__information__name'>
          <li> <b> Name: </b>
            {name}</li>
        </div>
        <div className='location__information__list'>
          <li> <b> Type: </b>
            {type}</li>
          <li><b> Dimesion: </b>
            {dimension}</li>
          <li> <b> Population: </b>
            {population}</li>
        </div>
      </ul>
    </div>
  );
};

export default LocationInformation;