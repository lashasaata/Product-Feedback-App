import Empty from "/assets/suggestions/illustration-empty.svg"

export default function EmptyFeedbacks(){
    return( 
    <div className="bg-white p-5 flex gap-4 flex-col justify-center items-center">
            <img  className="w-102 h-108" src={Empty} alt="illustration empty" />
            <p className="text-xl font-bold tracking-wide text-blue-gray-800">There is no feedback yet.</p>
            <p className="text-xs text-center text-blue-gray-600">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            
            <div className="px-4 py-3 rounded-lg bg-purple-600">
                <p className="text-xs font-bold text-white">+ Add Feedback</p>
            </div>
        </div>)
}