import "./App.css";
import dataJson from "./data.json";
import RoadMap from "./components/roadmap/Roadmap";
import React, { createContext, useContext, useState } from "react";
import NewFeedback from "./components/add-edit-feedback/add-feedback/NewFeedback";
import EditFeedback from "./components/add-edit-feedback/edit-feedback/EditFeedback";
import { useFormContext } from "react-hook-form"; // for validating forms. when using usecontext, remove this import locally in other components(inputs)

function App() {
  const [data, setData] = useState(dataJson); // this should be included in useContext(?)
  // const { productRequests } = data;
  return (
    <>
      <NewFeedback data={data} setData={setData} />
      {/* <EditFeedback data={data} setData={setData} /> */}
    </>
  );
}

export default App;
