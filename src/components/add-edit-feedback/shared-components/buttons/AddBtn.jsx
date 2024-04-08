import styled from "styled-components";
import { MyContext } from "../../../../App";
import { useContext } from "react";
export default function AddButton({ children }) {
  const context = useContext(MyContext);
  return <AddButtonComponent type="submit">{children}</AddButtonComponent>;
}

const AddButtonComponent = styled.button`
  background: rgba(173, 31, 234, 1);
  border-radius: 10px;
  padding: 10.5px 32px;
  width: 100%;

  font-family: Jost;
  font-size: 13px;
  font-weight: 700;
  line-height: 18.79px;
  color: rgba(242, 244, 254, 1);

  @media (min-width: 768px) {
    width: 144px;
    padding: 12px 25px;
    font-size: 14px;
  }

  &:hover {
    background: rgba(199, 90, 246, 1);
  }
`;
