import React from 'react';

const Pagination = ({ residentPerPage, totalResidents, pageChange, actualResidentPage }) => {

  const numberPage = []
  for (let i = 1; i <= Math.ceil(totalResidents / residentPerPage); i++) {
    numberPage.push(i)
  }
  return (
    <div>
      <div className='pagination'>
        {numberPage.map((number) =>
        (<button className={number === actualResidentPage ? "actualResidentPage" : ""} 
                 onClick={() => pageChange(number)}
                 key={number} > {number} 

        </button>))}
      </div>
    </div>
  );
};

export default Pagination;