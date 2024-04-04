import { useState } from "react";
import "./App.css";
import Feedbacks from "./components/Feedbacks";
import Data from "./data.json";

function App() {
  const [data,setData] = useState(Data);

  return <>
    <Feedbacks data={data} setData={setData}/>
  </>;
}

export default App;
