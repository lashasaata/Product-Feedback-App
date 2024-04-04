import styled from "styled-components";

export default function RoadMapFilter() {
  return (
    <FilterContainer>
      <span className="status-filter">Planned (2)</span>
      <span className="status-filter">In-Progress (3)</span>
      <span className="status-filter">Live (1)</span>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 16.5px 30px;
  font-weight: 700;
  color: rgba(58, 67, 116, 1);

  & .status-filter {
    font-size: 13px;

    line-height: 18.79px;
    letter-spacing: -0.1805555522441864px;
  }
`;
