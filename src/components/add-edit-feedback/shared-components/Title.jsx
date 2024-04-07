import styled from "styled-components";

export default function Title({ children }) {
  return <FeedbackTitle>{children}</FeedbackTitle>;
}

const FeedbackTitle = styled.h3`
  font-weight: 700;
  line-height: 18.79px;
  letter-spacing: -0.1805555522441864px;
  color: rgba(58, 67, 116, 1);
  margin-top: 24px;
  font-size: 13px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 40px;
  }
`;
