import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
const ResidentCard = ({url}) => {
  const [resident, setResident] = useState({});
  const [colorStatus, setColorStatus] = useState('green')

  useEffect(() => {
    if (url) {
      const promise = axios(url)
      promise.then(res => {
        setResident({
          name: res.data.name,
          status: res.data.status,
          image: res.data.image,
          origin: res.data.origin.name,
          episode: res.data.episode.length,
          species: res.data.species
        })
        if (resident.status === 'Alive') { setColorStatus('green') }
        else if (
          resident.status === 'Dead'
        ) { setColorStatus('red') }
        else {
          setColorStatus('gray')
        }
      })
    }


  }, [url, resident.status])

  return (
    <div className='containter__image__card'>
      <div className="card">
        <img src={resident.image} alt="" />
        <div className="information__card">
          {resident.name}
          <p><span className={'circle ' + colorStatus}></span>
           Status: {resident.status}-{resident.species}</p>
          <p> Origin: {resident.origin} </p>
          <p> Episode where appear: {resident.episode} </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;