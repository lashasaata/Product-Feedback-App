import "./App.css";
import dataJson from "./data.json";
import RoadMap from "./components/roadmap/Roadmap";
import React, { createContext, useContext, useState } from "react";
import NewFeedback from "./components/add-edit-feedback/add-feedback/NewFeedback";

function App() {
  const [data, setData] = useState(dataJson); // this should be included in useContext(?)
  // const { productRequests } = data; // and i guess this one as well
  return (
    <>
      <NewFeedback data={data} setData={setData} />
    </>
  );
}

export default App;
