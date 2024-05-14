import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../Auth/login/login";
import Signup from "../Auth/signup/signup";
import Auth from "../Auth/auth";
import Home from "../Home/home";
import LandingPage from "../LandingPage/landingPage";
import Exercices from "../Exercices/exercices"; 
import Unfounded from "../Unfounded.jsx/Unfounded";
import CaloriesCalCulator from "../CaloriesCalCulator/CaloriesCalCulator";
import { Storeparent } from "../Store/Storeparent";

export default function RouterApp() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Unfounded />} />
                    <Route path='/' element={<LandingPage />} />
                    <Route path="/auth" element={<Auth />}>
                        <Route path="log-in" element={<Login />} />
                        <Route path="sign-up" element={<Signup />} />
                    </Route>
                    <Route path='/home' element={<Home />} />
                    <Route path='/exercices' element={<Exercices />} />
                    <Route path="/CaloriesCalcuator" element={<CaloriesCalCulator />}/>
                    <Route path='/store' element={<Storeparent />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}
