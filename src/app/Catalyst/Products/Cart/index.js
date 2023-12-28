import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import EmptyState from './EmptyState';

const Cart = ({ cartList = [], setCartList = () => {}, setOpenCart }) => {

    const removeSelectedProduct = (item) => {
        const filteredCardList = cartList.filter((itm)=> itm.id !== item?.id);
        setCartList(filteredCardList);
    }

  return (
    <div>
        <div className={styles.cart_top_bar}>
            <div style={{ fontWeight: '600'}}>All Products</div>
            <div>Featured Products</div>
            <Image src='https://i.postimg.cc/D09K7pf6/shopping-cart.png' alt="cart_icon" width={24} height={24} />
            <div>{cartList?.length || 0}</div>
        </div>

        <div className={styles.shopping_cart}>Shopping Cart</div>
        
        {
            cartList.length > 0 ?
            (cartList || []).map((product)=> {
                const { id, image = '', name = '', price = 0 } = product || {};

                return(
                    <div key={id} className={styles.cart_card_container}>
                    <div className={styles.cart_product_img}>
                        <Image src={image} alt="product" width={175} height={200} className={styles.product_image} />
                    </div>
                    <div className={styles.cart_card_section_right}>
                        <div className={styles.cart_product_name}>{name}</div>
                        <div className={styles.cart_product_desc}>Black Cotton</div>
                        <div className={styles.cart_product_price}>INR {price}</div>
                        <div><button className={styles.remove_btn} onClick={() => removeSelectedProduct(product)}>Remove X</button></div>
                    </div>
                </div>
                )
            }): 
            <EmptyState setOpenCart={setOpenCart} />
        }
    </div>
  )
}

export default Cart;