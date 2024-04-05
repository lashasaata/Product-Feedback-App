import styled from "styled-components";
import FeedbackCard from "./FeedbackCard";

export default function FeedBackCardSpace({
  productRequests,
  selectedFilter,
  getCountByStatus,
  setData,
}) {
  const filteredProductRequests =
    selectedFilter === "all"
      ? productRequests
      : productRequests.filter(
          (feedback) => feedback.status === selectedFilter
        );

  const displayFilter =
    selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1);

  return (
    <>
      <FeedbackSpace>
        {selectedFilter === "all" ? (
          ""
        ) : (
          <StatusInfoTitle>
            <h2>
              {displayFilter}{" "}
              <span>
                {displayFilter === "all"
                  ? ""
                  : "(" + getCountByStatus(displayFilter) + ")"}
              </span>
            </h2>

            <p>Features currently being developed</p>
          </StatusInfoTitle>
        )}
        <CardsContainer>
          {filteredProductRequests.map((feedback) => {
            if (feedback.status !== "suggestion") {
              return (
                <FeedbackCard
                  key={feedback.id}
                  feedback={feedback}
                  setData={setData}
                />
              );
            }
          })}
        </CardsContainer>
      </FeedbackSpace>
    </>
  );
}

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const FeedbackSpace = styled.main`
  background: rgba(247, 248, 253, 1);
  height: fit-content;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StatusInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0px 24px 0px;
  margin: auto;
  position: relative;
  left: -60px;
  /* text-align: left;
  align-self: flex-start; */

  & h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 26.01px;
    letter-spacing: -0.25px;
    color: rgba(58, 67, 116, 1);
  }

  & p {
    font-size: 13px;
    font-weight: 400;
    line-height: 18.79px;
    color: rgba(100, 113, 150, 1);
  }
`;
