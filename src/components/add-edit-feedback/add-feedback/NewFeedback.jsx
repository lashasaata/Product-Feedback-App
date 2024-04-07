import styled from "styled-components";
import GoBack from "../../roadmap/Go-back";
import Form from "../shared-components/Form";
import FeedbackTitle from "../shared-components/FdbckTitle";
import Category from "../shared-components/Category";
import FdbckComment from "../shared-components/FdbckComment";
import BtnContainer from "../shared-components/buttons/BtnContainer";

export default function NewFeedback({ data, setData }) {
  return (
    <FeedbackContainer>
      <Header>
        {" "}
        <GoBack />
      </Header>

      <Main>
        <Form>
          <img
            id="plus-icon"
            src="/assets/shared/icon-new-feedback.svg"
            alt="plus icon"
          />
          <h1 id="form-title">Create New Feedback</h1>
          <FeedbackTitle />
          <Category data={data} setData={setData} />
          <FdbckComment />
          <BtnContainer />
        </Form>
      </Main>
    </FeedbackContainer>
  );
}

const Header = styled.header`
  padding: 34px 24px;
`;

const FeedbackContainer = styled.div`
  & #plus-icon {
    position: absolute;
    top: -20px;
    left: 24px;
    width: 40px;
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
