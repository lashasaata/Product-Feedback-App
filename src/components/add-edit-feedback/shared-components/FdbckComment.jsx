import styled from "styled-components";
import Title from "./Title";
import Headline from "./Headline";

export default function FdbckComment({ register, errors }) {
  return (
    <CommentContainer>
      <Title>Feedback Detail</Title>
      <Headline>
        Include any specific comments on what should be improved, added, etc.
      </Headline>
      <textarea
        className={`feedback-comment ${
          errors["feedback-comment"] ? "error" : ""
        }`}
        type="text"
        name="feedback-comment"
        id="new-comment"
        {...register("feedback-comment", { required: "Can’t be empty" })}
      />
      {errors["feedback-comment"] && (
        <ErrorMessage>{errors["feedback-comment"].message}</ErrorMessage>
      )}
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 279px;

  @media (min-width: 768px) {
    width: 431px;
    font-family: Jost;
  }

  & .feedback-comment {
    width: 279px;
    height: 120px;
    background: rgba(247, 248, 253, 1);
    border-radius: 6px;
    margin-top: 16px;
    padding: 16px 24px 16px 16px;
    resize: none;
    font-size: 13px;
    font-weight: 400;
    line-height: 18.79px;
    color: rgba(58, 67, 116, 1);

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
