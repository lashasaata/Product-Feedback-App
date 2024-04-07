import styled from "styled-components";
import Title from "./Title";
import Headline from "./Headline";

export default function FdbckComment() {
  return (
    <CommentContainer>
      <Title>Feedback Detail</Title>
      <Headline>
        Include any specific comments on what should be improved, added, etc.
      </Headline>
      <textarea
        className="feedback-comment"
        type="text"
        name="feedback-comment"
        id="new-comment"
      />
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

    @media (min-width: 768px) {
      width: 456px;
      font-size: 15px;
    }

    &:focus {
      outline: 1px solid rgba(70, 97, 230, 1);
    }
  }
`;
