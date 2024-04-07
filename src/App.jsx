import datajson from "./data.json";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Suggestions from "./Pages/Suggestions";
import Feedback from "./Pages/Feedback";
import NewFeedback from "./Pages/NewFeedback";
import EditFeedback from "./Pages/EditFeedback";
import Roadmap from "./Pages/Roadmap";

import { createContext, useState } from "react";
export const MyContext = createContext(null);

function App() {
  const [data, setData] = useState(datajson);
  const navigate = useNavigate();
  return (
    <>
      <MyContext.Provider
        value={{
          data,
          setData,
          navigate,
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to={"/feedbacks"} />} />
          <Route path="/feedbacks" element={<Suggestions />} />
          <Route path="/feedbacks/:id" element={<Feedback />} />
          <Route path="/new-feedback" element={<NewFeedback />} />
          <Route
            path="/feedbacks/:id/edit-feedback"
            element={<EditFeedback />}
          />
          <Route path="/feedbacks/roadmap" element={<Roadmap />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
