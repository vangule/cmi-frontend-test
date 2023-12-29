import React from 'react'
import styles from './styles.module.css';
import Filters from './Filters';
import Card from './Card';
import Modal from 'react-modal';
import Cart from './Cart';

const customStyles = {
  content: {
  height:'100%',
  width:'450px',
  right: '0%',
  top:'0px',
  transform: 'translate(255%, 0%)',
  },
};

const Products = ({ data = {}, currentItems,  openCart = false, setOpenCart = () => {}, cartList, setCartList = () => {} }) => {
  return (
    <div className={styles.product_section}>
        <Filters />
       <div className={styles.right_section}>
        {
          (currentItems || []).map((item)=> {
            return(
            <div key={item?.id}>
              <Card  item={item} setOpenCart={setOpenCart} cartList={cartList} setCartList={setCartList} />
              </div>)
          })
        }
       </div>
       <Modal
        isOpen={openCart}
        onRequestClose={()=> setOpenCart(false)}
        style={customStyles}
        >
          <Cart cartList={cartList} setCartList={setCartList} setOpenCart={setOpenCart} />
        </Modal>
    </div>
  )
}

export default Products