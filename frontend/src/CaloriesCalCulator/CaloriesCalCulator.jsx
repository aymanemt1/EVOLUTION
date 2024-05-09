import React, { useContext, useState } from 'react';
import "./CaloriesCalCulator.css";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import { CaloriesContextt } from './CaloriesContext';

export default function CaloriesCalCulator() {
  const { birthday, height, weight, goal } = useContext(CaloriesContextt);
  const [Q1Display, setQ1Display] = useState(true);
  const [Q2Display, setQ2Display] = useState(false);
  const [Q3Display, setQ3Display] = useState(false);
  const [Q4Display, setQ4Display] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const NextQ1 = () => { setQ1Display(false); setQ2Display(true); }
  const NextQ2 = () => { setQ2Display(false); setQ3Display(true); }
  const NextQ3 = () => { setQ3Display(false); setQ4Display(true); }
  const NextQ4 = () => { setQ4Display(false); setContentVisible(true); }
  const BackQ2 = () => { setQ2Display(false); setQ1Display(true); }
  const BackQ3 = () => { setQ3Display(false); setQ2Display(true); }
  const BackQ4 = () => { setQ4Display(false); setQ3Display(true); }

  return (
    <>
      <div>
        {Q1Display && <Q1 NextQ1={NextQ1} />}
        {Q2Display && <Q2 NextQ2={NextQ2} BackQ2={BackQ2}/>}
        {Q3Display && <Q3 NextQ3={NextQ3} BackQ3={BackQ3}/>}
        {Q4Display && <Q4 NextQ4={NextQ4} BackQ4={BackQ4}/>}
      </div>
      {contentVisible && (<div>
        <h1>data //</h1>
        <h2>BIRTHDAY : {birthday}</h2>
        <h2>HEIGHT : {height}</h2>
        <h2>WEIGHT : {weight}</h2>
        <h2>GOAL : {goal}</h2>
      </div>)}
    </>
  );
}
