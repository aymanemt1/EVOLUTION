import { Fragment } from "react";
import './btnAdd.css'
import { Link } from "react-router-dom";

export default function BtnAdd(){
    return (
        <Fragment>
            <Link to='/' className="LinkAdd">
            <div className="parentbuttonAddwork">
                <i className='bx bxs-add-to-queue' ></i> <h4>Create Workout</h4>
            </div>
            </Link>
        </Fragment>
    )
}