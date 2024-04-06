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
  font-size: 13px;

  & .feedback-headline-input {
    background: rgba(247, 248, 253, 1);
    width: 279px;
    height: 48px;
    margin-top: 16px;
    border-radius: 6px;
    padding: 10px 12px 12px 20px;

    font-family: Jost;
    font-size: 13px;
    font-weight: 400;
    line-height: 21.68px;
    color: rgba(58, 67, 116, 1);
    cursor: pointer;

    &:focus {
      outline: 1px solid rgba(70, 97, 230, 1);
    }
  }
`;
