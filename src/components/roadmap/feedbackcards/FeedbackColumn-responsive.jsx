import styled from "styled-components";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackColumn({
  filteredProductRequests,
  setData,
  status,
}) {
  return (
    <ColumnContainer>
      {filteredProductRequests.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} setData={setData} />
      ))}
    </ColumnContainer>
  );
}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
