import styled from "styled-components";
import dataJson from "../../data.json";
import Header from "./Header";
import RoadMapFilter from "./RoadmapFilter";
import { useState } from "react";
import FeedBackCardSpace from "./feedbackcards/FeedbackCardSpace";

export default function RoadMap() {
  const [data, setData] = useState(dataJson);
  const { productRequests } = data;

  return (
    <>
      <Header />
      <RoadMapFilter
        productRequests={productRequests}
        data={data}
        setData={setData}
      />
      <FeedBackCardSpace productRequests={productRequests} data={data} />
    </>
  );
}
