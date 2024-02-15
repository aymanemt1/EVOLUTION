import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "../LandingPage/landingPage";
export default function RouterApp(){
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}