import styled from "styled-components";
import dataJson from "../../data.json";
import Header from "./Header";
import RoadMapFilter from "./RoadmapFilter";
import { useState } from "react";
import FeedBackCardSpace from "./feedbackcards/FeedbackCardSpace";

export default function RoadMap() {
  const [data, setData] = useState(dataJson);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { productRequests } = data;

  return (
    <>
      <Header />
      <RoadMapFilter
        setSelectedFilter={setSelectedFilter}
        productRequests={productRequests}
      />
      <FeedBackCardSpace
        selectedFilter={selectedFilter}
        productRequests={productRequests}
        data={data}
      />
    </>
  );
}
