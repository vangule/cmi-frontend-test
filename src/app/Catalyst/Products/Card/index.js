import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';

function Card({ item = {}, setOpenCart = () => {},cartList, setCartList }) {
    const { name, price } = item || {};

    const addItemInCard = () => {
      const isItemInCart = cartList.some(cartItem => cartItem.id === item.id);

      if (!isItemInCart) {
        setCartList(prevCartList => [...prevCartList, item]);
      } else {
        console.log('Item is already in the cart');
        alert('Item is already in the cart');
      }
      setOpenCart(true);
    }

  return (
   <div className={styles.container}>
    <div className={styles.image_holder}>
      <Image src={item?.image} alt="product" width={300} height={400} className={styles.product_image} />
      <div className={styles.add_to_cart} onClick={addItemInCard}>Add to cart</div>
    </div>
    <div className={styles.product_name}>{name}</div>
    <div className={styles.product_desc}>Black Cotton</div>
    <div className={styles.product_price}>INR {price}</div>
   </div>
  )
}

export default Card;