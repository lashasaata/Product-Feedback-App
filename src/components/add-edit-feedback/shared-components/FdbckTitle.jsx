import styled from "styled-components";
import Title from "./Title";
import Headline from "./Headline";

export default function FeedbackTitle() {
  return (
    <TitleContainer>
      <Title>Feedback Title</Title>
      <Headline>Add a short, descriptive headline</Headline>
      <input
        className="feedback-headline-input"
        type="text"
        name="feedback-headline"
        id="feedback-headline"
      />
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  & .feedback-headline-input {
    background: rgba(247, 248, 253, 1);
    width: 279px;
    height: 48px;
    margin-top: 16px;
    border-radius: 6px;
    padding: 15px 15px 14px 16px;
    font-family: Jost;
    font-size: 13px;
    font-weight: 400;
    line-height: 18.79px;

    color: rgba(58, 67, 116, 1);
    cursor: pointer;

    @media (min-width: 768px) {
      width: 456px;
      font-size: 15px;
    }

    &:focus {
      outline: 1px solid rgba(70, 97, 230, 1);
    }
  }
`;
