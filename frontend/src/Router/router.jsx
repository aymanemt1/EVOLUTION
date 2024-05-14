import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../Auth/login/login";
import Signup from "../Auth/signup/signup";
import Auth from "../Auth/auth";
import Home from "../Home/home";
import LandingPage from "../LandingPage/landingPage";
import Exercices from "../Exercices/exercices";
export default function RouterApp(){
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path="/auth" element={<Auth />}>
                        <Route path="log-in" element={<Login />} />
                        <Route path="sign-up" element={<Signup />} />
                    </Route>
                    <Route path='/home' element={<Home />} />
                    <Route path='/exercices' element={<Exercices />} >
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}