import styled from "styled-components";

export default function RoadMapFilter({ productRequests, setSelectedFilter }) {
  const getCountByStatus = (statusName) => {
    return productRequests.filter((request) => request.status === statusName)
      .length;
  };

  const handleFilterClick = (status) => {
    setSelectedFilter((prevFilter) => (prevFilter === status ? "all" : status));
  };

  return (
    <FilterContainer>
      <span
        className="status-filter"
        onClick={() => handleFilterClick("planned")}>
        Planned ({getCountByStatus("planned")})
      </span>
      <span
        className="status-filter"
        onClick={() => handleFilterClick("in-progress")}>
        In-Progress ({getCountByStatus("in-progress")})
      </span>
      <span className="status-filter" onClick={() => handleFilterClick("live")}>
        Live ({getCountByStatus("live")})
      </span>
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
  background: rgba(247, 248, 253, 1);

  border-bottom: 1px solid rgba(140, 146, 179, 25%);

  & .status-filter {
    font-size: 13px;
    cursor: pointer;
    line-height: 18.79px;
    letter-spacing: -0.1805555522441864px;
  }
`;
