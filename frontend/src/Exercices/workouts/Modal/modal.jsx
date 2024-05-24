import React, { Fragment } from "react";
import './modal.css';
import WorkOutForm from "./workoutForm/workOutForm";
import ExercicesWOForm from "./exercicesWoFrom/exercicesWoFrom";

export default function ModalCreateWO({ closeModal }){
    return (
        <Fragment>
            <div className="parentModalCreateWO">
                <div className="modalContent">
                    <h1>Create workout</h1>
                    <WorkOutForm />
                    <ExercicesWOForm />
                </div>
            </div>
        </Fragment>
    )
}
