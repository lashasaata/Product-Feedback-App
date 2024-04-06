import styled from "styled-components";
import GoBack from "../../roadmap/Go-back";
import Form from "../shared-components/Form";

export default function NewFeedback() {
  return (
    <Main>
      <GoBack />
      <Form />
    </Main>
  );
}

const Main = styled.div`
  padding: 34px 24px 77px;

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
