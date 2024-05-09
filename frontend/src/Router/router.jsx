import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "../LandingPage/landingPage";
import Login from "../Auth2/login/login";
import Signup from "../Auth2/signup/signup";
import Auth from "../Auth2/auth";
import CaloriesCalCulator from "../CaloriesCalCulator/CaloriesCalCulator";
import Q1 from "../CaloriesCalCulator/Q1";
import Q2 from "../CaloriesCalCulator/Q2";
import Q3 from "../CaloriesCalCulator/Q3";
import Q4 from "../CaloriesCalCulator/Q4";
import Unfounded from "../Unfounded.jsx/Unfounded";

export default function RouterApp(){
    const [questionsAnswered, setQuestionsAnswered] = useState(false);
    const [birthday,setBirthday]=useState('')
    const [height,setHeight]=useState('')
    const [weight,setWeight]=useState('')
    const [goal,setGoal]=useState('')
    const calculatorData={birthday:birthday,height:height,weight:weight,goal:goal}

    const handleQuestionsAnswered4 = (goal) => {
        setQuestionsAnswered(true);
        setGoal(goal)
    };
    const handleQuestionsAnswered3 = (weight) => {
      setWeight(weight)
    };
    const handleQuestionsAnswered2 = (height) => {
        setHeight(height)
    };
    const handleQuestionsAnswered1 = (birthday) => {
        setBirthday(birthday)
    };
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Unfounded/>}/>
                    <Route path='/' element={<LandingPage />} />
                    <Route path="/auth" element={<Auth />}>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                    <Route path="/CaloriesCalculator/*" element={
                        questionsAnswered ? <CaloriesCalCulator calculatorData={calculatorData}/> : (
                            <Routes>
                                <Route path="Q1" element={<Q1 onAnswered1={handleQuestionsAnswered1} />} />
                                <Route path="Q2" element={<Q2 onAnswered2={handleQuestionsAnswered2} />} />
                                <Route path="Q3" element={<Q3 onAnswered3={handleQuestionsAnswered3} />} />
                                <Route path="Q4" element={<Q4 onAnswered4={handleQuestionsAnswered4} />} />
                            </Routes>
                        )
                    } />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}
