import styled from "styled-components";

export default function Headline({ children }) {
  return <FeedbackHeadline>{children}</FeedbackHeadline>;
}

const FeedbackHeadline = styled.p`
  font-weight: 400;
  line-height: 18.79px;
  color: rgba(100, 113, 150, 1);
  margin-top: 3px;
`;
