import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import WorkoutChoice from "./components/log-workout/WorkoutChoice";
import LogChest from "./components/log-workout/LogChest";
import LogBack from "./components/log-workout/LogBack";
import LogLegs from "./components/log-workout/LogLegs";
import LogCustom from "./components/log-workout/LogCustom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />

          <Route path="/" element={<Navbar />}>
            <Route index element={<WorkoutChoice />} />
            <Route path="LogChest" element={<LogChest />} />
            <Route path="LogBack" element={<LogBack />} />
            <Route path="LogLegs" element={<LogLegs />} />
            <Route path="LogCustom" element={<LogCustom />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
