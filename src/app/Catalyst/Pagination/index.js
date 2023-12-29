import React, { useState } from 'react';
import styles from './styles.module.css';

const itemsPerPage = 6;

const Pagination = ({ data = [], currentPage, currentItems = [], setCurrentPage }) => {
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
        {Array.from({ length: Math?.ceil(data.length / itemsPerPage) }).map(
          (item, index) => (
            <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? styles.active_pagination_btn : styles.pagination_btn} >
              {index + 1}
            </button>
          )
        )}
    </div>
  );
};

export default Pagination;
