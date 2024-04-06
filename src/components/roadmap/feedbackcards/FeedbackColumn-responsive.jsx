import styled from "styled-components";
import FeedbackCard from "./FeedbackCard";

const statusDescriptions = {
  planned: "Ideas prioritized for research",
  "in-progress": "Currently being developed",
  live: "Released features",
};

export default function FeedbackColumn({
  filteredProductRequests,
  setData,
  status,
  getCountByStatus,
}) {
  const columnDescription = statusDescriptions[status];

  return (
    <ColumnCardContainer>
      <ColumnContainer>
        <div className="status-box">
          <h2 className="status">
            {status} <span>({getCountByStatus(status)})</span>
          </h2>
          <p className="status-description">{columnDescription}</p>{" "}
        </div>

        <div className="cards-responsive-container"></div>

        {filteredProductRequests.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            feedback={feedback}
            setData={setData}
          />
        ))}
      </ColumnContainer>
    </ColumnCardContainer>
  );
}

const ColumnCardContainer = styled.div``;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & .status {
    font-size: 14px;
    font-weight: 700;
    line-height: 20.23px;
    letter-spacing: -0.1944444477558136px;
    color: rgba(58, 67, 116, 1);
  }

  & .status-description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20.23px;
    color: rgba(100, 113, 150, 1);
  }

  & .status-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

// <>
// {filteredProductRequests.map((feedback) => {
//   if (feedback.status !== "suggestion" && feedback.status === status) {
//     return (
//       <FeedbackCard
//         key={feedback.id}
//         feedback={feedback}
//         setData={setData}
//       />
//     );
//   }
// })}
// </>
