import { Fragment } from "react";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import './exercices.css';

export default function Exercices(){
    return(
        <Fragment>
            <Navbar /> 
            <div className="parentTitleExercicesChemin">
                <h1>Categories</h1>
                <p><span> overview / </span> categories</p>
            </div>
            <div className="parentContentExercices">
                <Sidebar />
                <Outlet />
            </div>
        </Fragment>
    )
}