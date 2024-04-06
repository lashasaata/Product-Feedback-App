import "./App.css";
import RoadMap from "./components/roadmap/Roadmap";
import React, { createContext, useContext } from "react";
import NewFeedback from "./components/add-edit-feedback/add-feedback/NewFeedback";

function App() {
  return (
    <>
      <NewFeedback />
    </>
  );
}

export default App;
