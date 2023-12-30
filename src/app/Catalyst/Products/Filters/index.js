import React, { useState, useEffect } from 'react'
import styles from './styles.module.css';
import Categories from './Categories';
import useGetColors from '../../hooks/useGetColors';
import useGetMaterials from '../../hooks/useGetMaterials';
import { log } from 'react-modal/lib/helpers/ariaAppHider';

function Filters({ setFilterColor = () => {}, setFilterMaterial = () => {}, filterColor, filterMaterial }) {
  const { materials } = useGetMaterials();
  const { colors } = useGetColors();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Filters</div>
      <Categories type='Materials' item={materials} setFilterMaterial={setFilterMaterial} filterMaterial={filterMaterial} />
      <Categories type='Colors' item={colors} setFilterColor={setFilterColor} filterColor={filterColor} />
    </div>
  )
}

export default Filters;