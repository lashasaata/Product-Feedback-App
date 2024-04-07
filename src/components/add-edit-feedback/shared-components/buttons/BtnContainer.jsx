import styled from "styled-components";
import AddButton from "./AddBtn";
import CancelButton from "./CancelBtn";

export default function BtnContainer({ children }) {
  return <ButtonsContainer>{children}</ButtonsContainer>;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
    gap: 16px;
  }
`;
