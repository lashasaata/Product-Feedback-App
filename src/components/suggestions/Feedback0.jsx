import ArrowUp from "/assets/shared/icon-arrow-up.svg";
import Comments from "/assets/shared/icon-comments.svg";
import { MyContext } from "../../App";
import { useContext } from "react";

export default function Feedback({ feedback, onClick, isUpvoted }) {
  const context = useContext(MyContext);
  return (
    <div
      key={feedback.id}
      className="p-6 gap-3 rounded-2xl bg-white flex flex-col"
    >
      <div
        onClick={() => context.navigate(`/feedbacks/${feedback.id}`)}
        className="flex flex-col gap-3 cursor-pointer"
      >
        <p className="text-xs font-bold tracking-tighter text-blue-900 lg:text-lg">
          {feedback.title}
        </p>
        <p className="text-xs text-blue-gray-600 lg:text-base">
          {feedback.description}
        </p>

        <div className="rounded-lg bg-slate-100 py-1 px-4 w-fit">
          <p className="text-xs font-semibold text-blue-600">
            {feedback.category}
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className={`flex hover:bg-blue-200 gap-2 items-center rounded-lg ${
            isUpvoted ? "bg-blue-600 text-white" : "bg-slate-100"
          } py-1 px-4`}
          onClick={onClick}
        >
          <img src={ArrowUp} alt="arrow up icon" />
          <p
            className={`text-x font-bold tracking-tighter ${
              isUpvoted ? "text-white" : "text-blue-900"
            }`}
          >
            {feedback.upvotes}
          </p>
        </button>

        <div className="flex items-center gap-1">
          <img src={Comments} alt="comments icon" />
          <p className="text-xs font-semibold text-blue-600">
            {feedback.comments?.length ?? 0}
          </p>
        </div>
      </div>
    </div>
  );
}
