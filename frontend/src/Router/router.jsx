import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "../LandingPage/landingPage";
import Login from "../Auth2/login/login";
import Signup from "../Auth2/signup/signup";
import Auth from "../Auth2/auth";
import { Storeparent } from "../Store/Storeparent";
export default function RouterApp(){
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path="/auth" element={<Auth />}>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
                <Routes>
                    <Route path='/store' element={<Storeparent />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}