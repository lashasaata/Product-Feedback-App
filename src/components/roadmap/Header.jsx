import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderFlexGroup>
        <div className="go-back-flex-group">
          <img src="/assets/shared/icon-arrow-left.svg" alt="Arrow Left" />
          <button className="go-back">Go Back</button>
        </div>
        <h2 id="roadmap">Roadmap</h2>
      </HeaderFlexGroup>

      <AddFeedBackButton>+ Add Feedback</AddFeedBackButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(55, 63, 104, 1);
  padding: 26px 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin: 56px 40px 8px;
    width: 689px;
    border-radius: 10px;
  }
`;

const HeaderFlexGroup = styled.div`
  & .go-back-flex-group {
    display: flex;
    align-items: center;
    gap: 15.67px;

    & .go-back {
      font-size: 13px;
      line-height: 18.79px;

      @media (min-width: 768px) {
        font-size: 14px;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & #roadmap {
    font-size: 18px;
    line-height: 26.01px;
    letter-spacing: -0.25px;
    text-align: left;
    margin-top: 3px;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

const AddFeedBackButton = styled.button`
  font-size: 13px;
  line-height: 18.79px;
  color: rgba(242, 244, 254, 1);
  background-color: rgba(173, 31, 234, 1);
  border: none;
  border-radius: 10px;
  padding: 10.5px 17px;

  @media (min-width: 768px) {
    padding: 12px 25px;
  }

  &:hover {
    background: rgba(199, 90, 246, 1);
  }
`;
