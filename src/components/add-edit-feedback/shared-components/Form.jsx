import styled from "styled-components";

export default function Form({ children }) {
  return <FormContainer>{children}</FormContainer>;
}

const FormContainer = styled.form`
  padding: 44px 24px 24px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin-top: 54px;
  position: relative;

  @media (min-width: 768px) {
    padding: 52px 40px 42px;
  }
`;
