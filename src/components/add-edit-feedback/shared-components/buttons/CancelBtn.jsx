import styled from "styled-components";

export default function CancelButton() {
  return <CancelButtonComponent type="delete">Cancel</CancelButtonComponent>;
}

const CancelButtonComponent = styled.button`
  background: rgba(58, 67, 116, 1);
  border-radius: 10px;
  padding: 10.5px 32px;
  width: 100%;

  font-family: Jost;
  font-size: 13px;
  font-weight: 700;
  line-height: 18.79px;
  color: rgba(242, 244, 254, 1);

  @media (min-width: 768px) {
    width: 93px;
    padding: 12px 25px;
    font-size: 14px;
  }

  &:hover {
    background: rgba(101, 110, 163, 1);
  }
`;
