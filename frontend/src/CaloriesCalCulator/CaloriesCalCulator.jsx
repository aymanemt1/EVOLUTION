import React from 'react'
import "./CaloriesCalCulator.css"
export default function CaloriesCalCulator(props) {
  return (
    <div>
      <h1>data //</h1>
      <h2>BIRTHDAY :{props.calculatorData.birthday}</h2>
      <h2>HEIGHT : {props.calculatorData.height}</h2>
      <h2> WEIGHT :{props.calculatorData.weight}</h2>
      <h2>GOAL :{props.calculatorData.goal}</h2>
    </div>
  )
}
