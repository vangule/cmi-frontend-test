'use client'

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'

import styles from './styles.module.css';
import Products from './Products';
import useRequest from './hooks/useRequest';
import Footer from './Footer';


const itemsPerPage = 6; 

const Catalyst = () => {
  const [data, setData] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [changeTextColor, setChangeTextColor] = useState(false);
  const [filterColor, setFilterColor] = useState({ isCFilterApplied : false, colorId: '', name: '' });
  const [filterMaterial, setFilterMaterial] = useState({ isMFilterApplied : false, materialId: '', name: '' });

  const productApi = useRequest({ baseUrl : 'https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products' });

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const colorWiseFilter = data?.products.filter((it) => it.colorId === filterColor?.colorId);
  const materialWiseFilter = data?.products.filter((it) => it.materialId === filterMaterial?.materialId);

  let renderData = [];
  if(filterColor?.isCFilterApplied){
    renderData = colorWiseFilter;
  }else if(filterMaterial?.isMFilterApplied){
    renderData = materialWiseFilter;
  }else{
    renderData = data?.products;
  }

  const currentItems = (renderData || [])?.slice(indexOfFirstItem, indexOfLastItem);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productApi.get('');

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 610) {
        setChangeTextColor(true);
      } else {
        setChangeTextColor(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
   <>
   <div className={styles.header_container}>
    <Navbar
      setOpenCart={setOpenCart}
      cartItemsCount={cartList?.length}
      changeTextColor={changeTextColor}
    />
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
      cartList={cartList}
      currentPage={currentPage}
      setOpenCart={setOpenCart}
      setCartList={setCartList}
      setCurrentPage={setCurrentPage}
      filterColor={filterColor}
      filterMaterial={filterMaterial}
      setFilterColor={setFilterColor}
      setFilterMaterial={setFilterMaterial}
   />

   <Footer />
   </>

  )
}

export default Catalyst;