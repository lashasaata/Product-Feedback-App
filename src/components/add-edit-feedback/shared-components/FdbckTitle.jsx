import styled from "styled-components";
import Title from "./Title";
import Headline from "./Headline";

export default function FeedbackTitle({ register, errors }) {
  return (
    <TitleContainer>
      <Title>Feedback Title</Title>
      <Headline>Add a short, descriptive headline</Headline>
      <input
        className={`feedback-headline-input ${
          errors["feedback-title"] ? "error" : ""
        }`}
        type="text"
        name="feedback-title"
        id="feedback-headline"
        {...register("feedback-title", { required: "Can’t be empty" })}
      />

      {errors["feedback-title"] && (
        <ErrorMessage>{errors["feedback-title"].message}</ErrorMessage>
      )}
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

    &.error {
      outline: 1px solid rgba(215, 55, 55, 1);
    }

    @media (min-width: 768px) {
      width: 456px;
      font-size: 15px;
    }

    &:focus {
      outline: 1px solid rgba(70, 97, 230, 1);
    }
  }
`;

const ErrorMessage = styled.p`
  color: rgba(215, 55, 55, 1);
  font-family: Jost;
  font-size: 12px;
  font-weight: 400;
  line-height: 20.23px;
  margin-top: 4px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
