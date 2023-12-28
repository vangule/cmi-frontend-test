import React from 'react'
import styles from './styles.module.css';

const Categories = ({ item = [], type = ''}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{type}</div>
      {item?.length > 0 ?  <div>All</div> : null}

        {(item || []).map((cl)=>{
            return(
            <ul key={cl?.id}>
                <li className={styles.category_item}>{cl.name}</li>
            </ul>);
        })}
    </div>
  )
}

export default Categories;