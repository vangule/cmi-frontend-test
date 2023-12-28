import React, { useState, useEffect } from 'react'
import styles from './styles.module.css';
import Categories from './Categories';
import useGetColors from '../../hooks/useGetColors';
import useGetMaterials from '../../hooks/useGetMaterials';

function Filters() {
  const { materials } = useGetMaterials();
  const { colors } = useGetColors();

  return (
    <div className={styles.container}>
    <div className={styles.heading}>Filter</div>
    <Categories type='Materials' item={materials} />
    <Categories type='Colors' item={colors} />
    </div>
  )
}

export default Filters;