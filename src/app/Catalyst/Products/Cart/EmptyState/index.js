import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';

const EmptyState = ({ setOpenCart = () => {}}) => {
  return (
    <div className={styles.container}>
         <Image src='https://i.postimg.cc/D09K7pf6/shopping-cart.png' alt="cart_icon" width={60} height={60} />
        <div className={styles.empty_state}>Your cart is empty!</div>
        <button className={styles.shop_now_btn} onClick={()=> setOpenCart(false)} >Shop Now</button>
    </div>
  )
}

export default EmptyState