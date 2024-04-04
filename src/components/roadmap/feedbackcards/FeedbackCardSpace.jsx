import styled from "styled-components";
import FeedbackCard from "./FeedbackCard";

export default function FeedBackCardSpace({ data }) {
  return (
    <FeedbackSpace>
      <FeedbackCard data={data} />
      <FeedbackCard data={data} />
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
