import React, { useContext } from 'react'
import { MenuContext } from '../../Context/MenuContext';

export default function CaloriesHome() {

    const { isactive, setisactive } = useContext(MenuContext);
  return (
    <div className={isactive?'caloriesHome-active':'caloriesHome-inActive'}>
      
    </div>
  )
}
