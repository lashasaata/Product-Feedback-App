import { useParams } from "react-router";
import datajson from "../data.json";
function Feedback() {
  // const params = useParams();
  const choosen = datajson.productRequests[1];
  console.log(choosen);
  console.log(choosen.comments.length - 1);
  return (
    <div className="bg-[#f7f8fd] flex flex-col items-center gap-6">
      <header className="w-[327px] flex items-center justify-between mt-6">
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
        <p className="text-[13px] text-[#647196] font-[400] mt-[9px]">
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
      <main className="flex flex-col items-start gap-6 w-[327px] bg-white rounded-[10px] py-6 pl-[23px] pr-6">
        <h1 className="text-lg text-[#3a4374] font-[700] tracking-[-0.25px]">
          <span></span> Comments
        </h1>
        <div className="flex flex-col gap-6">
          {choosen.comments.map((e, index) => {
            return (
              <div
                key={e.id}
                className={`${
                  index < choosen.comments.length - 1
                    ? "border-b border-solid border-[ #8c92b3]"
                    : ""
                } flex flex-col gap-6`}
              >
                <div className="flex flex-col pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={e.user.image}
                        alt="avatar"
                      />
                      <div className="flex flex-col">
                        <span className="text-[13px] text-[#3a4374] font-[700] tracking-[-0.18px]">
                          {e.user.name}
                        </span>
                        <span className="text-[13px] text-[#647196] font-[400]">
                          @{e.user.username}
                        </span>
                      </div>
                    </div>
                    <span className="text-[13px] text-[#4661e6] font-[600]">
                      Reply
                    </span>
                  </div>
                  <p className="text-[13px] text-[#647196] font-[400] mt-4">
                    {e.content}
                  </p>
                  <section className="flex items-start justify-between mt-5">
                    <textarea className="w-[190px] h-[60px] bg-[#f7f8fd] rounded-[5px] outline-none resize-none p-2  text-[13px] text-[#3a4374] font-[400]" />
                    <button className="w-[80px] h-[28px] rounded-[10px] bg-[#ad1fea] text-[13px] text-[#f2f4fe] font-[700]">
                      Post Reply
                    </button>
                  </section>
                </div>
                {e.replies ? (
                  <section className="w-[280px] flex gap-[23px]">
                    <div className="h-[216px] w-[1px] border-l border-solid border-[#647196] opacity-10"></div>
                    <div>
                      {e.replies.map((e, index) => {
                        return (
                          <div key={index} className="flex flex-col pb-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <img
                                  className="w-10 h-10 rounded-full"
                                  src={e.user.image}
                                  alt="avatar"
                                />
                                <div className="flex flex-col">
                                  <span className="text-[13px] text-[#3a4374] font-[700] tracking-[-0.18px]">
                                    {e.user.name}
                                  </span>
                                  <span className="text-[13px] text-[#647196] font-[400]">
                                    {e.user.username}
                                  </span>
                                </div>
                              </div>
                              <span className="text-[13px] text-[#4661e6] font-[600]">
                                Reply
                              </span>
                            </div>
                            <p className="text-[13px] text-[#647196] font-[400] mt-4">
                              <span className="text-[#ad1fea] font-[700]">
                                {e.replyingTo}
                              </span>{" "}
                              {e.content}
                            </p>
                            <section className="flex items-start justify-between mt-5">
                              <textarea
                                className="w-[175px] h-[60px] bg-[#f7f8fd] rounded-[5px] outline-none resize-none p-2  text-[13px] text-[#3a4374] font-[400]"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                              ></textarea>
                              <button className="w-[70px] h-[28px] rounded-[10px] bg-[#ad1fea] text-[13px] text-[#f2f4fe] font-[700]">
                                Post Reply
                              </button>
                            </section>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </main>
      <section className="w-[327px] bg-white rounded-[10px] p-6 mb-20">
        <h1 className="text-lg text-[#3a4374] font-[700] tracking-[-0.25px]">
          Add Comment
        </h1>
        <textarea
          className="outline-none resize-none w-[279px] h-20 p-4 break-all text-[13px] text-[#3a4374] font-[400] rounded-[5px] bg-[#f7f8fd] placeholder:text-[13px] placeholder:text-[#8c92b3] placeholder:font-[500] mt-6"
          placeholder="Type your comment here"
          type="text"
          name=""
          id=""
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-[13px] text-[#647196] font-[400]">
            <span></span>
            Characters left
          </p>
          <button className="w-[119px] h-10 bg-[#ad1fea] rounded-[10px] text-[13px] text-[#f2f4fe] font-[700]">
            Post Comment
          </button>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
