import dataJson from "../../data.json"; // this should as well go to the app
import styled from "styled-components";
import Header from "./Header";
import RoadMapFilter from "./RoadmapFilter";
import { useState } from "react";
import { useScreenType } from "./window-width/WindowWidth";
import FeedBackCardSpace from "./feedbackcards/FeedbackCardSpace";

export default function RoadMap() {
  const [data, setData] = useState(dataJson); // this should be passed from main component
  const [selectedFilter, setSelectedFilter] = useState("all"); // maybe, this too.
  const { productRequests } = data; // and i guess this one as well
  const getCountByStatus = (statusName) => {
    return productRequests.filter((request) => request.status === statusName)
      .length;
  };

  const { isMobile, isTablet, isDesktop } = useScreenType(); // this might stay here. let's see

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
