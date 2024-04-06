import styled from "styled-components";

export default function Category() {
  return (
    <>
      <CategoryContainer>
        <h3 className="feedback-title">Category</h3>
        <p className="headline-description">
          Choose a category for your feedback
        </p>
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

  & .feedback-title {
    font-weight: 700;
    line-height: 18.79px;
    letter-spacing: -0.1805555522441864px;
    color: rgba(58, 67, 116, 1);
    margin-top: 24px;
  }

  & .headline-description {
    font-weight: 400;
    line-height: 18.79px;
    color: rgba(100, 113, 150, 1);
    margin-top: 3px;
  }

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
