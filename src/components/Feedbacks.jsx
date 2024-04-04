import Hamburger from "/assets/shared/mobile/icon-hamburger.svg";
import ArrowDown from "/assets/shared/icon-arrow-down.svg";
import ArrowUp from "/assets/shared/icon-arrow-up.svg";
import Comments from "/assets/shared/icon-comments.svg";
import Empty from "/assets/suggestions/illustration-empty.svg";

export default function Feedbacks({data,setData}){
    return <div className="feedbacks">
        <header>
            <div className="w-full flex justify-between items-center py-4 px-6" style={{backgroundImage: 'radial-gradient(circle at 104% -10%, #e84d70, #a337f6 54%, #28a7ed 103%)'}}>
                <div className="title-text">
                    <p className="text-base font-bold tracking-tight text-white">Frontend Mentor</p>
                    <p className="text-xs font-medium text-white opacity-75">Feedback Board</p>
                </div>

                <img src={Hamburger} alt="icon hamburger" />
            </div>

            <div className="py-2 px-6 bg-sky-950 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <p className="text-xs text-white font-bold"><span className="font-normal opacity-75">Sort by : </span>Most Upvotes</p>
                    <img src={ArrowDown} alt="arrow down icon" />
                </div>

                <div className="px-4 py-3 rounded-lg bg-purple-600">
                    <p className="text-xs font-bold text-white">+ Add Feedback</p>
                </div>
            </div>
        </header>

        {data.productRequests.length === 0 ? (
                <main className="bg-white p-5 flex gap-4 flex-col justify-center items-center">
                    <img  className="w-102 h-108" src={Empty} alt="illustration empty" />
                    <p className="text-xl font-bold tracking-wide text-blue-gray-800">There is no feedback yet.</p>
                    <p className="text-xs text-center text-blue-gray-600">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                    
                    <div className="px-4 py-3 rounded-lg bg-purple-600">
                        <p className="text-xs font-bold text-white">+ Add Feedback</p>
                    </div>
                </main>
            ) : (
                <main className="bg-slate-100 p-6 flex gap-4 flex-col">
                    {data.productRequests.map((feedback) => {
                        return (
                            <div key={feedback.id} className="p-6 gap-3 rounded-2xl bg-white flex flex-col">
                                <p className="text-xs font-bold tracking-tighter text-blue-900">{feedback.title}</p>
                                <p className="text-xs text-blue-gray-600">{feedback.description}</p>

                                <div className="rounded-lg bg-slate-100 py-1 px-4">
                                    <p className="text-xs font-semibold text-blue-600">{feedback.category}</p>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex gap-2 items-center rounded-lg bg-slate-100 py-1 px-4">
                                        <img src={ArrowUp} alt="arrow up icon" />
                                        <p className="text-xs font-bold tracking-tighter text-blue-900">{feedback.upvotes}</p>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <img src={Comments} alt="comments icon" />
                                        <p className="text-xs font-semibold text-blue-600">{feedback.comments?.length ?? 0}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </main>
            )}

    </div>
}