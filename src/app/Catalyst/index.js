'use client'

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'

import styles from './styles.module.css';
import Products from './Products';
import useRequest from './hooks/useRequest';
import { log } from 'react-modal/lib/helpers/ariaAppHider';
import Pagination from './Pagination';


const itemsPerPage = 6; 

const Catalyst = () => {
  const [data, setData] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [cartList, setCartList] = useState([]);

  const apiClient = useRequest({ baseUrl : 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products' });

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (data?.products || [])?.slice(indexOfFirstItem, indexOfLastItem);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('');

        if (!response || !response.data) {
          throw new Error('No data received');
        }

        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
   <>
   <div className={styles.header_container}>
    <Navbar setOpenCart={setOpenCart} cartItemsCount={cartList?.length} />
    <div className={styles.header}>
      <div className={styles.heading}>Letest Styles</div>
      <div className={styles.sub_heading}>At Yesterday’s Prices</div>
      <button className={styles.browse_cta}>BROWSE ALL STYLES</button>
    </div>
   </div>
   
   <Products 
      data={data} 
      currentItems={currentItems}
      openCart={openCart} 
      setOpenCart={setOpenCart}
      cartList={cartList}
      setCartList={setCartList}
   />

   <Pagination data={data?.products} currentPage={currentPage} setCurrentPage={setCurrentPage} currentItems={currentItems} />
   </>

  )
}

export default Catalyst;