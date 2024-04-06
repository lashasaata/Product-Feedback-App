import styled from "styled-components";
import Title from "./Title";
import Headline from "./Headline";

export default function Category() {
  return (
    <>
      <CategoryContainer>
        <Title>Category</Title>
        <Headline>Choose a category for your feedback</Headline>
        <select
          className="feedback-category-select"
          type="select"
          name="category-select"
          id="category-select"
        />
      </CategoryContainer>
    </>
  );
}

const CategoryContainer = styled.div`
  font-size: 13px;

  & .feedback-category-select {
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
