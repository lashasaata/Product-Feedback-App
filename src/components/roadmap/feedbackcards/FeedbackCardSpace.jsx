import styled from "styled-components";
import FeedbackCard from "./FeedbackCard";

export default function FeedBackCardSpace({ productRequests }) {
  return (
    <FeedbackSpace>
      {productRequests.map((feedback) => {
        if (feedback.status !== "suggestion") {
          return <FeedbackCard key={feedback.id} feedback={feedback} />;
        }
      })}
    </FeedbackSpace>
  );
}

const FeedbackSpace = styled.main`
  background: rgba(247, 248, 253, 1);
  height: 100dvh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
