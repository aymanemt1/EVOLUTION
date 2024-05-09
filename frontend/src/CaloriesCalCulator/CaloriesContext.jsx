import React, { createContext, useState } from 'react'
export const CaloriesContextt=createContext()
export default function CaloriesContext({children}) {
    const [birthday,setBirthday]=useState('')
    const[height,setHeight]=useState('')
    const [weight,setWeight]=useState('')
    const [goal,setGoal]=useState('')
  return (
    <CaloriesContextt.Provider value={{birthday,setBirthday,height,setHeight,weight,setWeight,goal,setGoal}}>
      {children}
    </CaloriesContextt.Provider>
  )
}
