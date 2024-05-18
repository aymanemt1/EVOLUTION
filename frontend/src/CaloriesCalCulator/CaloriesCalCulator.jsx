import React, { useContext, useState } from 'react';
import "./CaloriesCalCulator.css";
import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";
import Q3 from "./Questions/Q3";
import Q4 from "./Questions/Q4";
import Q5 from "./Questions/Q5";
import { CaloriesContextt } from '../Context/CaloriesContext';
import CaloriesCalculatorMain from './Home/CaloriesCalculatorMain';

export default function CaloriesCalCulator() {
  const { birthday, height, weight, goal } = useContext(CaloriesContextt);
  const [Q1Display, setQ1Display] = useState(true);
  const [Q2Display, setQ2Display] = useState(false);
  const [Q3Display, setQ3Display] = useState(false);
  const [Q4Display, setQ4Display] = useState(false);
  const [Q5Display ,setQ5Display]=useState(false)
  const [contentVisible, setContentVisible] = useState(false);

  const NextQ1 = () => { setQ1Display(false); setQ2Display(true); }
  const NextQ2 = () => { setQ2Display(false); setQ3Display(true); }
  const NextQ3 = () => { setQ3Display(false); setQ4Display(true); }
  const NextQ4 = () => { setQ4Display(false); setQ5Display(true); }
  const NextQ5=()=>{ setQ5Display(false); setContentVisible(true); }
  const BackQ2 = () => { setQ2Display(false); setQ1Display(true); }
  const BackQ3 = () => { setQ3Display(false); setQ2Display(true); }
  const BackQ4 = () => { setQ4Display(false); setQ3Display(true); }
  const BackQ5=()=>{setQ5Display(false) ; setQ4Display(true);}
  return (
    <>
      <div>
        {Q1Display && <Q1 NextQ1={NextQ1} />}
        {Q2Display && <Q2 NextQ2={NextQ2} BackQ2={BackQ2}/>}
        {Q3Display && <Q3 NextQ3={NextQ3} BackQ3={BackQ3}/>}
        {Q4Display && <Q4 NextQ4={NextQ4} BackQ4={BackQ4}/>}
        {Q5Display && <Q5 NextQ5={NextQ5} BackQ5={BackQ5}/>}
      </div>
      {contentVisible && <CaloriesCalculatorMain/>}
    </>
  );
}
