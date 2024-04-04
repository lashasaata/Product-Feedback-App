import React, { useState } from 'react';
import Hamburger from "/assets/shared/mobile/icon-hamburger.svg";
import ArrowDown from "/assets/shared/icon-arrow-down.svg";
import ArrowUp from "/assets/shared/icon-arrow-up.svg";
import Comments from "/assets/shared/icon-comments.svg";
import Empty from "/assets/suggestions/illustration-empty.svg";

export default function Feedbacks({ data, setData }) {
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [sortBy, setSortBy] = useState('mostUpvotes');

    const seggestedFeedbacks = data.productRequests.filter(feedback => feedback.status === "suggestion");

    const sortFeedbacks = (criteria) => {
        if (sortBy === criteria) {
            setSortBy(criteria === 'mostUpvotes' ? 'leastUpvotes' : 'mostUpvotes');
        } else {
            setSortBy(criteria);
        }
    };

    const sortedFeedbacks = [...seggestedFeedbacks].sort((a, b) => {
        switch (sortBy) {
            case 'mostUpvotes':
                return b.upvotes - a.upvotes;
            case 'leastUpvotes':
                return a.upvotes - b.upvotes;
            case 'mostComments':
                return (b.comments?.length ?? 0) - (a.comments?.length ?? 0);
            case 'leastComments':
                return (a.comments?.length ?? 0) - (b.comments?.length ?? 0);
        }
    });

    return (
        <div className="feedbacks">
            <header>
                <div className="w-full flex justify-between items-center py-4 px-6" style={{backgroundImage: 'radial-gradient(circle at 104% -10%, #e84d70, #a337f6 54%, #28a7ed 103%)'}}>
                    <div className="title-text">
                        <p className="text-base font-bold tracking-tight text-white">Frontend Mentor</p>
                        <p className="text-xs font-medium text-white opacity-75">Feedback Board</p>
                    </div>

                    <img src={Hamburger} alt="icon hamburger" />
                </div>

                <div className="py-2 px-6 bg-sky-950 flex justify-between items-center">
                    <div className="flex items-center gap-2" onClick={() => setShowSortOptions(!showSortOptions)}>
                        <p className="text-xs text-white font-bold"><span className="font-normal opacity-75">Sort by : </span>{sortBy === 'mostUpvotes' ? 'Most Upvotes' : sortBy === 'leastUpvotes' ? 'Least Upvotes' : sortBy === 'mostComments' ? 'Most Comments' : 'Least Comments'}</p>
                        <img src={showSortOptions?ArrowUp:ArrowDown} alt="arrow down icon"/>
                    </div>

                    <div className="px-4 py-3 rounded-lg bg-purple-600">
                        <button className="text-xs font-bold text-white">+ Add Feedback</button>
                    </div>
                </div>
            </header>

            {showSortOptions && (
                <div className="absolute rounded-lg bg-white" style={{ left: '58px', top: '112px', boxShadow: '0 10px 40px -7px rgba(55, 63, 104, 0.35)'  }}>
                    <div className="text-xs text-blue-gray-600 border-b border-blue-gray-700 py-2 px-5" onClick={() => { sortFeedbacks('mostUpvotes'); setShowSortOptions(false); }}>Most Upvotes</div>
                    <div className="text-xs text-blue-gray-600 border-b border-blue-gray-700 py-2 px-5" onClick={() => { sortFeedbacks('leastUpvotes'); setShowSortOptions(false); }}>Least Upvotes</div>
                    <div className="text-xs text-blue-gray-600 border-b border-blue-gray-700 py-2 px-5" onClick={() => { sortFeedbacks('mostComments'); setShowSortOptions(false); }}>Most Comments</div>
                    <div className="text-xs text-blue-gray-600 border-b border-blue-gray-700 py-2 px-5" onClick={() => { sortFeedbacks('leastComments'); setShowSortOptions(false); }}>Least Comments</div>
                </div>
            )}

            {seggestedFeedbacks.length === 0 ? (
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
                    {sortedFeedbacks.map((feedback) => {
                        return (
                            <div key={feedback.id} className="p-6 gap-3 rounded-2xl bg-white flex flex-col">
                                <p className="text-xs font-bold tracking-tighter text-blue-900">{feedback.title}</p>
                                <p className="text-xs text-blue-gray-600">{feedback.description}</p>

                                <div className="rounded-lg bg-slate-100 py-1 px-4 w-fit-content">
                                    <p className="text-xs font-semibold text-blue-600">{feedback.category}</p>
                                </div>

                                <div className="flex justify-between">
                                    <button className="flex gap-2 items-center rounded-lg bg-slate-100 py-1 px-4">
                                        <img src={ArrowUp} alt="arrow up icon" />
                                        <p className="text-xs font-bold tracking-tighter text-blue-900">{feedback.upvotes}</p>
                                    </button>

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
    );
}
