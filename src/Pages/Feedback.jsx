import { useParams } from "react-router";
import datajson from "../data.json";
function Feedback() {
  // const params = useParams();
  const choosen = datajson.productRequests[1];
  // console.log(choosen);
  return (
    <div className="bg-[#f7f8fd] flex flex-col items-center gap-6 mt-6">
      <header className="w-[327px] flex items-center justify-between">
        <div className="flex items-center gap-[15.7px]">
          <img src="./assets/shared/icon-arrow-left.svg" alt="arrow_icon" />
          <span className="text-[13px] text-[#647196] font-[700]">Go Back</span>
        </div>
        <button className="w-[119px] h-10 rounded-[10px] bg-[#4661e6] text-[13px] text-[#f2f4fe] font-[700]">
          Edit Feedback
        </button>
      </header>
      <section className="w-[327px] bg-white rounded-[10px] p-6 mt-6">
        <h1 className="text-[13px] text-[#3a4374] tracking-[-0.18px] font-[700]">
          {choosen.title}
        </h1>
        <p className="text-[13px] text-[#647196] font-[500] mt-[9px]">
          {choosen.description}
        </p>
        <div className="w-[77px] h-[30px] bg-[#f2f4ff] flex items-center justify-center rounded-[10px] mt-[10px]">
          <span className="text-[13px] text-[#4661e6] font-[600]">
            {choosen.category}
          </span>
        </div>
        <div className="flex items-center justify-between mt-[14px]">
          <div className="w-[69px] h-[32px] rounded-[10px] bg-[#f2f4fe] flex items-center justify-center gap-[10px]">
            <img src="./assets/shared/icon-arrow-up.svg" alt="arrow_icon" />
            <span className="text-[13px] text-[#3a4374] font-[700] tracking-[-0.18px]">
              {choosen.upvotes}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img src="./assets/shared/icon-comments.svg" alt="comments_icon" />
            <span className="text-[13px] text-[#3a4374] font-[700] tracking-[-0.18px]">
              {choosen.comments.length}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
