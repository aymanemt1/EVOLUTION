import React, { Fragment, useState } from "react";
import "./categories.css";
import { DataCategories } from "./categoriesData";
import PersonalTraining from "./personalTraining/personalTraining";
import MyWorkouts from "./myWorkouts/myWorkouts";
import ArrayExercices from "./arrayExercices/arrayExercices";

export default function Categories() {
  return (
    <Fragment>
      <div className="parentCategoriresExercices">
        <PersonalTraining />
        <MyWorkouts />
        <ArrayExercices /> 
      </div>
    </Fragment>
  );
}
