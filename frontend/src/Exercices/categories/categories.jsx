import React, { Fragment, useState } from "react";
import "./categories.css";
import { DataCategories } from "./categoriesData";
import PersonalTraining from "./personalTraining/personalTraining";
import MyWorkouts from "./myWorkouts/myWorkouts";

export default function Categories() {
  return (
    <Fragment>
      <div className="parentCategoriresExercices">
        <PersonalTraining />
        <MyWorkouts />
      </div>
    </Fragment>
  );
}
