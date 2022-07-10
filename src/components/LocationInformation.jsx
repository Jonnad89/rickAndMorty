import React from "react";

const LocationInformation = ({ name, dimension, type, population }) => {
  return (
    <div>
      <h2 className="text-center">{name}</h2>
      <div className="row">
        <div className="col-sm-4 text-center">
          <b>Type: </b>
          {type}
        </div>
        <div className="col-sm-4 text-center">
          <b>Dimension: </b>
          {dimension}
        </div>
        <div className="col-sm-4 text-center">
          <b>Population: </b>
          {population}
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;