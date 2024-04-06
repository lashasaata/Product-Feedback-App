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
      <input
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

  & .feedback-comment {
    width: 279px;
    height: 120px;
    background: rgba(247, 248, 253, 1);
    border-radius: 6px;
    margin-top: 16px;
  }
`;
