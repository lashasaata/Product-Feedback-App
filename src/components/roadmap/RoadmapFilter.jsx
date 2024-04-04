import styled from "styled-components";

export default function RoadMapFilter({
  setSelectedFilter,
  selectedFilter,
  getCountByStatus,
}) {
  const handleFilterClick = (status) => {
    setSelectedFilter((prevFilter) => (prevFilter === status ? "all" : status));
  };

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
      {/* 
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
      )} */}
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
