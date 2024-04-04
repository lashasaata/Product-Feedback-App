import styled from "styled-components";

export default function RoadMapFilter({
  productRequests,
  setSelectedFilter,
  selectedFilter,
}) {
  const getCountByStatus = (statusName) => {
    return productRequests.filter((request) => request.status === statusName)
      .length;
  };

  const handleFilterClick = (status) => {
    setSelectedFilter((prevFilter) => (prevFilter === status ? "all" : status));
  };
  const displayFilter =
    selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1);

  return (
    <>
      <FilterContainer>
        <FilterStatus
          isActive={selectedFilter === "planned"}
          filter="planned"
          className="status-filter"
          onClick={() => handleFilterClick("planned")}>
          Planned ({getCountByStatus("planned")})
        </FilterStatus>
        <FilterStatus
          isActive={selectedFilter === "in-progress"}
          filter="in-progress"
          className="status-filter"
          onClick={() => handleFilterClick("in-progress")}>
          In-Progress ({getCountByStatus("in-progress")})
        </FilterStatus>
        <FilterStatus
          isActive={selectedFilter === "live"}
          filter="live"
          className="status-filter"
          onClick={() => handleFilterClick("live")}>
          Live ({getCountByStatus("live")})
        </FilterStatus>
      </FilterContainer>

      {selectedFilter === "all" ? (
        ""
      ) : (
        <StatusInfoTitle>
          <h2>
            {displayFilter}{" "}
            <span>
              {displayFilter === "all"
                ? ""
                : "(" + getCountByStatus(displayFilter) + ")"}
            </span>
          </h2>

          <p>Features currently being developed</p>
        </StatusInfoTitle>
      )}
    </>
  );
}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 30px 0 30px;
  font-weight: 700;
  color: rgba(58, 67, 116, 1);
  background: rgba(247, 248, 253, 1);
  border-bottom: 1px solid rgba(140, 146, 179, 25%);
`;

const FilterStatus = styled.span`
  font-size: 13px;
  cursor: pointer;
  line-height: 18.79px;
  letter-spacing: -0.1805555522441864px;
  padding-bottom: 16.5px;
  width: 125px;
  text-align: center;
  border-bottom: ${(props) =>
    props.isActive
      ? props.filter === "in-progress"
        ? "4px solid rgba(173, 31, 234, 1)"
        : props.filter === "planned"
        ? "4px solid rgba(244, 159, 133, 1)"
        : props.filter === "live"
        ? "4px solid rgba(98, 188, 250, 1)"
        : ""
      : ""};
`;

const StatusInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 24px 24px 0px;

  & h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 26.01px;
    letter-spacing: -0.25px;
    color: rgba(58, 67, 116, 1);
  }

  & p {
    font-size: 13px;
    font-weight: 400;
    line-height: 18.79px;
    color: rgba(100, 113, 150, 1);
  }
`;
