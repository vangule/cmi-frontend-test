import React from 'react'
import styles from './styles.module.css';

const Categories = ({ item = [], type = '', setFilterColor = () => {}, setFilterMaterial = () => {}, filterColor, filterMaterial }) => {

  const handleFilters = (itm) => {
    setFilterColor((prev) => ({...prev, isCFilterApplied: true, colorId: itm?.id, name: itm?.name }));
    setFilterMaterial((prev) => ({...prev, isMFilterApplied: true, materialId: itm?.id, name: itm?.name }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>{type}</div>
      {item?.length > 0 ?  <div style={{ fontWeight : filterColor?.isCFilterApplied || filterMaterial?.isMFilterApplied ? 400 : 700, cursor:'pointer' }} onClick={() => setFilterColor((prev) => ({...prev, isCFilterApplied: false, isMFilterApplied: false, colorId: '', name: '' }))}>All</div> : null}

      {(item || []).map((cl)=>{
            const isActive = filterColor?.name === cl?.name || filterMaterial?.name === cl?.name;
            return(
            <ul key={cl?.id}>
                <li className={styles.category_item} style={{ fontWeight : isActive ? 700 : 400}} onClick={()=> handleFilters(cl)}>{cl.name}</li>
            </ul>);
        })}
    </div>
  )
}

export default Categories;