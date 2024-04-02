import React, { useState } from "react";

export default function LogChest() {
  const [addSet, setAddSet] = useState([
    { excersize: "", weight: "", rep: "" }
  ]);

  const handleClick = event => {
    event.preventDefault();
    let object = {
      excersize: "",
      weight: "",
      rep: ""
    };
    setAddSet([...addSet, object]);
  };
  const deleteSet = index => {
    let data = [...addSet];
    data.splice(index, 1)
    setAddSet(data)
  };
  const handleChange = (event, index) => {
    let data = [...addSet];
    data[index][event.target.name] = event.target.value;
    setAddSet(data);
  };

  const myForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        {addSet.map((set, index) => {
          return (
            <div className="container">
              <div key={index} className="row">
                <p className=" left white-text">Set {index + 1}: </p>
                <button
                  className=" waves-effect waves-light btn-large yellow darken-1s black-text"
                  onClick={() => deleteSet(index)}
                >
                  Remove
                </button>
                <div className="input-field col s3">
                  <select
                    value={set.excersize}
                    name="excersize"
                    onChange={event => handleChange(event, index)}
                    className="browser-default"
                  >
                    <option value="" disabled selected>
                      Choose an Excercise
                    </option>
                    <option value="BarbellBenchPress">
                      Barbell Bench Press
                    </option>
                    <option value="InclineBarbellBenchPress">
                      Incline Barbell Bench Press
                    </option>
                    <option value="PecDeck">Pec Deck</option>
                    <option value="SkullCrushers">Skull Crushers</option>
                    <option value="TricepPushDown">Tricep Push Down</option>
                    <option value="Dips">Dips</option>
                  </select>
                </div>

                <div className="col s3 input-field">
                  <label>Weight</label>
                  <input
                    name="weight"
                    className="white-text"
                    type="text"
                    onChange={event => handleChange(event, index)}
                    value={set.weight}
                  />
                </div>
                <div className="col s3 input-field">
                  <label>Reps</label>
                  <input
                    name="rep"
                    className="white-text"
                    type="text"
                    onChange={event => handleChange(event, index)}
                    value={set.rep}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </form>
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(addSet);
  };

  return (
    <div>
      <div className="container section">
        <h5 className="white-text">Chest and Triceps</h5>
        <p className="white-text">Please denote bodyweight excersizes as (BW)</p>
      </div>
      {myForm()}

      <div className="row">
        <button
          className="col s5 push-s3 waves-effect waves-light btn yellow darken-1s black-text"
          onClick={handleClick}
        >
          Add more Sets?
        </button>
      </div>

      <div className="row">
        <button
          className="col s5 push-s3 waves-effect waves-light btn yellow darken-1s black-text"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
