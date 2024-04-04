import styled from "styled-components";
import FeedbackCard from "./FeedbackCard";

export default function FeedBackCardSpace({ productRequests, selectedFilter }) {
  const filteredProductRequests =
    selectedFilter === "all"
      ? productRequests
      : productRequests.filter(
          (feedback) => feedback.status === selectedFilter
        );

  // console.log(filteredProductRequests);
  console.log(selectedFilter);
  // console.log(productRequests);
  return (
    <FeedbackSpace>
      {filteredProductRequests.map((feedback) => {
        if (feedback.status !== "suggestion") {
          return <FeedbackCard key={feedback.id} feedback={feedback} />;
        }
      })}
    </FeedbackSpace>
  );
}

const FeedbackSpace = styled.main`
  background: rgba(247, 248, 253, 1);
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
