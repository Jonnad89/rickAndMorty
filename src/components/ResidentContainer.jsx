import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import ResidentCard from './ResidentCard';
import Pagination from './Pagination';
const ResidentContainer = ({ url }) => {

  const [residents, setResidents] = useState([]);

  const [actualPage, setActualPage] = useState(1);

  const residentPerPage = 10;

  useEffect(() => {
    const promise = axios(url)
    promise.then(res => {
      setResidents(res.data.residents);
      setActualPage(1)
    })
  }, [url])


  /*Página actual*/

  const lastResidentIndex = actualPage * 10;
  const firstResidentIndex = lastResidentIndex - residentPerPage;
  const actualResidentPage = residents.slice(firstResidentIndex, lastResidentIndex)

  /* Cambio de página*/

  const pageChange = ((numberOfPage) => setActualPage(numberOfPage))


  return (
    <>
      <div>
        <h2>Residents</h2>
        {actualResidentPage.map((url) =>
        (<ResidentCard key={url.substring(42)}
          url={url} />))}
      </div>
      <div>
        <Pagination
          residentPerPage={residentPerPage}
          totalResident={residents.length}
          pageChange={pageChange}
          actualResidentPage={actualResidentPage}
        />
      </div>
    </>
  );
};

export default ResidentContainer;