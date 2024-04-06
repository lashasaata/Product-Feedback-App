import styled from "styled-components";
import GoBack from "../../roadmap/Go-back";
import Form from "../shared-components/Form";
import FeedbackTitle from "../shared-components/FdbckTitle";

export default function NewFeedback() {
  return (
    <FeedbackContainer>
      <Header>
        {" "}
        <GoBack />
      </Header>

      <Main>
        <Form>
          <div className="plus-container">
            <img
              id="plus-icon"
              src="/assets/shared/icon-plus.svg"
              alt="plus icon"
            />
          </div>
          <h1 id="form-title">Create New Feedback</h1>
          <FeedbackTitle />
        </Form>
      </Main>
    </FeedbackContainer>
  );
}

const Header = styled.header`
  padding: 34px 24px;
`;

const FeedbackContainer = styled.div`
  .plus-container {
    background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    );

    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -19px;

    & #plus-icon {
      width: 11.45px;
      height: 11.45px;
    }
  }

  .go-back-flex-group {
    display: flex;
    align-items: center;
    gap: 15.5px;
    color: rgba(100, 113, 150, 1);
    font-size: 13px;
    font-weight: 700;
    line-height: 18.79px;
  }
`;

const Main = styled.div`
  padding: 0px 24px 77px;
  display: flex;
  justify-content: center;
  margin-top: -35px;

  & #form-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 26.01px;
    letter-spacing: -0.25px;
    color: rgba(58, 67, 116, 1);
  }
`;
