import ArrowUp from "/assets/shared/icon-arrow-up.svg";
import Comments from "/assets/shared/icon-comments.svg";

export default function Feedback({feedback, onClick}){
    return <div key={feedback.id} className="p-6 gap-3 rounded-2xl bg-white flex flex-col cursor-pointer">
    <p className="text-xs font-bold tracking-tighter text-blue-900">{feedback.title}</p>
    <p className="text-xs text-blue-gray-600">{feedback.description}</p>

    <div className="rounded-lg bg-slate-100 py-1 px-4 w-fit">
        <p className="text-xs font-semibold text-blue-600">{feedback.category}</p>
    </div>

    <div className="flex justify-between">
        <button className="flex gap-2 items-center rounded-lg bg-slate-100 py-1 px-4"  onClick={onClick}>
            <img src={ArrowUp} alt="arrow up icon" />
            <p className="text-xs font-bold tracking-tighter text-blue-900">{feedback.upvotes}</p>
        </button>

        <div className="flex items-center gap-1">
            <img src={Comments} alt="comments icon" />
            <p className="text-xs font-semibold text-blue-600">{feedback.comments?.length ?? 0}</p>
        </div>
    </div>
</div>
}