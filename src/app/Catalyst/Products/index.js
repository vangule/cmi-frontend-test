import React from 'react'
import styles from './styles.module.css';
import Filters from './Filters';
import Card from './Card';
import Modal from 'react-modal';
import Cart from './Cart';
import Pagination from '../Pagination';

const customStyles = {
  content: {
  height:'100%',
  width:'450px',
  right: '0%',
  top:'0px',
  transform: 'translate(255%, 0%)',
  },
};

const Products = ({ data = {}, currentItems = [],  openCart = false, cartList = [], setOpenCart = () => {}, setCartList = () => {}, currentPage = 1, setCurrentPage = () => {} }) => {
  return (
    <div className={styles.product_section}>
        <Filters />

       <div className={styles.right_section}>
        <div className={styles.card_container}>
        {(currentItems || []).map((item)=> {
            return(
            <div key={item?.id}>
              <Card  item={item} setOpenCart={setOpenCart} cartList={cartList} setCartList={setCartList} />
              </div>)
          })}
        </div>

        <Pagination
          data={data?.products}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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

export default Products;