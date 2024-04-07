import { useContext } from "react";
import { MyContext } from "../../App";

export default function GoBack() {
  const context = useContext(MyContext);
  return (
    <div className="go-back-flex-group">
      <img src="/assets/shared/icon-arrow-left.svg" alt="Arrow Left" />
      <button
        onClick={() => context.navigate("/feedbacks")}
        className="go-back"
      >
        Go Back
      </button>
    </div>
  );
}
