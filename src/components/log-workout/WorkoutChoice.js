import React from "react";
import "./WorkoutChoice.css";
import { Link } from "react-router-dom";
export default function WorkoutChoice() {
  return (
    <div className="container">
      <div className="section">
        <h5 className="white-text">Default Workouts:</h5>
      </div>
      <div className="row">
        <a href="#" className="col s3 push-s1 btn-large yellow darken-1">
          <Link className="black-text" to="/LogChest">
            Chest and Triceps
          </Link>
        </a>
        <a href="#" className="col s3 push-s1 btn-large yellow darken-1">
          <Link className="black-text" to="/LogBack">
            Back and Biceps
          </Link>
        </a>
        <a href="#" className="col s3 push-s1 btn-large yellow darken-1">
          <Link className="black-text" to="/LogLegs">
            Legs and Shoulders
          </Link>
        </a>
      </div>
      <div className="divider"></div>
      <div className="section">
        {" "}
        <h5 className="white-text">Your Workouts:</h5>
      </div>
      <div className="row">
        <a href="#" className="col s6 push-s3 btn-large yellow darken-1s">
          <Link className="black-text" to="/LogCustom">
            Create your own
          </Link>
        </a>
      </div>
    </div>
  );
}
