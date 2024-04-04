import "./App.css";
import { Routes, Route } from "react-router-dom";
import Suggestions from "./Pages/Suggestions";
import Feedback from "./Pages/Feedback";
import NewFeedback from "./Pages/NewFeedback";
import EditFeedback from "./Pages/EditFeedback";
import Roadmap from "./Pages/Roadmap";
function App() {
  return (
    <>
      <Routes>
        <Route path="/feedbacks" element={<Suggestions />} />
        <Route path="/feedbacks/:id" element={<Feedback />} />
        <Route path="new-feedback" element={<NewFeedback />} />
        <Route path="edit-feedback" element={<EditFeedback />} />
        <Route path="roadmap" element={<Roadmap />} />
      </Routes>
    </>
  );
}

export default App;
