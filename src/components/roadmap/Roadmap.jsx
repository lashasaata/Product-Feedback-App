import dataJson from "../../data.json";
import styled from "styled-components";
import Header from "./Header";
import RoadMapFilter from "./RoadmapFilter";
import { useState } from "react";
import { useScreenType } from "./window-width/WindowWidth";
import FeedBackCardSpace from "./feedbackcards/FeedbackCardSpace";

export default function RoadMap() {
  const [data, setData] = useState(dataJson);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { productRequests } = data;
  const getCountByStatus = (statusName) => {
    return productRequests.filter((request) => request.status === statusName)
      .length;
  };

  const { isMobile, isTablet, isDesktop } = useScreenType();

  return (
    <>
      <Header />
      {isMobile && (
        <RoadMapFilter
          getCountByStatus={getCountByStatus}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          productRequests={productRequests}
        />
      )}

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
