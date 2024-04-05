import { useState } from "react";
import { useNavigate } from "react-router";
import datajson from "../data.json";

function Suggestions() {
  const [data, setData] = useState({});
  // const navigate = useNavigate();
  const uploads = datajson.productRequests;
  console.log(uploads);
  return (
    <div>
      {uploads.map((e) => {
        return <div key={e.id}>{e.description}</div>;
      })}
    </div>
  );
}

export default Suggestions;
