import { Routes, Route, Navigate } from "react-router-dom";
import Suggestions from "./Pages/Suggestions";
import Feedback from "./Pages/Feedback";
import NewFeedback from "./Pages/NewFeedback";
import EditFeedback from "./Pages/EditFeedback";
import Roadmap from "./Pages/Roadmap";

function App() {
  const [data, setData] = useState(dataJson); // this should be included in useContext(?)
  // const { productRequests } = data;
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/feedbacks"} />} />
        <Route path="/feedbacks" element={<Suggestions />} />
        <Route path="/feedbacks/:id" element={<Feedback />} />
        <Route path="new-feedback" element={<NewFeedback />} />
        <Route path="/feedbacks/:id/edit-feedback" element={<EditFeedback />} />
        <Route path="roadmap" element={<Roadmap />} />
      </Routes>
    </>
  );
}

export default App;
