import React from 'react'
import styles from '../Navbar/styles.module.css';
import Image from 'next/image';

function Navbar({ setOpenCart = () => {}, cartItemsCount = 0 }) {
  return (
    <div className={styles.container}>
        <div className={styles.sub_container}>
          <div className={styles.left_section}><span className={styles.brand_name}>RIGHT</span>FIT.COM</div>
          <div className={styles.right_section}>
              <div className={styles.right_section_item}>All Products</div>
              <div className={styles.right_section_item}>Featured Products</div>
              <div className={styles.right_section_cart_item}>
                <Image src='https://i.postimg.cc/dtJnpbCn/mdi-cart-outline.png' alt="cart_icon" width={24} height={24} style={{cursor:'pointer'}} onClick={() => setOpenCart(true)} />
                <span className={styles.product_count}>{cartItemsCount}</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar