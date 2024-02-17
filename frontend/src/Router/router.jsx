import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "../LandingPage/landingPage";
import LoginPage from "../Login/LoginPage";
export default function RouterApp(){
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}