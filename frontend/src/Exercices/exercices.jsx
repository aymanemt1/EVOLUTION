import { Fragment } from "react";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Exercices(){
    return(
        <Fragment>
            <Navbar /> 
            <Outlet />
        </Fragment>
    )
}