import dataJson from "../../data.json";
import styled from "styled-components";
import Header from "./Header";
import RoadMapFilter from "./RoadmapFilter";
import { useState } from "react";
import FeedBackCardSpace from "./feedbackcards/FeedbackCardSpace";

export default function RoadMap() {
  const [data, setData] = useState(dataJson);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { productRequests } = data;
  const getCountByStatus = (statusName) => {
    return productRequests.filter((request) => request.status === statusName)
      .length;
  };

  return (
    <>
      <Header />
      <RoadMapFilter
        getCountByStatus={getCountByStatus}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        productRequests={productRequests}
      />

      <FeedBackCardSpace
        getCountByStatus={getCountByStatus}
        selectedFilter={selectedFilter}
        productRequests={productRequests}
        data={data}
        setData={setData}
      />
    </>
  );
}

const Main = styled.main``;
