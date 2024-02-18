import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "../LandingPage/landingPage";
import Login from "../Auth/Login/Login";
import { RegisterForm } from "../Auth/Register/Register";
export default function RouterApp(){
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<RegisterForm />}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}