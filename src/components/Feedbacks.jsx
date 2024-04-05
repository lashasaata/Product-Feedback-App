import React, { useState } from 'react';
import Hamburger from "/assets/shared/mobile/icon-hamburger.svg";
import Close from "/assets/shared/mobile/icon-close.svg";
import ArrowDown from "/assets/shared/icon-arrow-down.svg";
import ArrowUp from "/assets/shared/icon-arrow-up.svg";
import SortOption from './SortOption';
import Category from './Category';
import Feedback from './Feedback';

export default function Feedbacks({ data, setData }) {
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [sortBy, setSortBy] = useState('mostUpvotes');
    const [upvotedFeedbacks, setUpvotedFeedbacks] = useState([]);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);

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
            default:
                return 0;
        }
    });

    const handleUpvote = (id) => {
        if (!upvotedFeedbacks.includes(id)) {
            setUpvotedFeedbacks([...upvotedFeedbacks, id]);
            const updatedData = data.productRequests.map(feedback => {
                if (feedback.id === id) {
                    return { ...feedback, upvotes: feedback.upvotes + 1 };
                }
                return feedback;
            });
            setData({ ...data, productRequests: updatedData });
        } else {
            const updatedData = data.productRequests.map(feedback => {
                if (feedback.id === id) {
                    return { ...feedback, upvotes: feedback.upvotes - 1 };
                }
                return feedback;
            });
            setData({ ...data, productRequests: updatedData });
            const filteredUpvotedFeedbacks = upvotedFeedbacks.filter(feedbackId => feedbackId !== id);
            setUpvotedFeedbacks(filteredUpvotedFeedbacks);
        }
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
        setOpacity(sidebarVisible ? 1 : 0.5);
    };

    const getStatusCounts = () => {
        const statusCounts = [];
        data.productRequests.forEach(feedback => {
            const status = feedback.status;
            const existingStatus = statusCounts.find(item => item.status === status);
            if (existingStatus) {
                existingStatus.count++;
            } else {
                statusCounts.push({ status: status, count: 1 });
            }
        });
        return statusCounts;
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSidebarVisible(false);
        setOpacity(1);
    };

    return (
        <div className="feedbacks">
            <header>
                <div className="w-full flex justify-between items-center py-4 px-6" style={{backgroundImage: 'radial-gradient(circle at 104% -10%, #e84d70, #a337f6 54%, #28a7ed 103%)'}}>
                    <div className="title-text">
                        <p className="text-base font-bold tracking-tight text-white">Frontend Mentor</p>
                        <p className="text-xs font-medium text-white opacity-75">Feedback Board</p>
                    </div>

                    <img className='cursor-pointer' src={sidebarVisible? Close: Hamburger} alt="icon hamburger" onClick={toggleSidebar} />
                </div>

                <div className="py-2 px-6 bg-sky-950 flex justify-between items-center" style={{ opacity: opacity }}>
                    <div className="cursor-pointer flex items-center gap-2" onClick={() => setShowSortOptions(!showSortOptions)}>
                        <p className="text-xs text-white font-bold"><span className="font-normal opacity-75">Sort by : </span>{sortBy === 'mostUpvotes' ? 'Most Upvotes' : sortBy === 'leastUpvotes' ? 'Least Upvotes' : sortBy === 'mostComments' ? 'Most Comments' : 'Least Comments'}</p>
                        <img src={showSortOptions?ArrowUp:ArrowDown} alt="arrow down icon"/>
                    </div>

                    <div className="px-4 py-3 rounded-lg bg-purple-600">
                        <button className="text-xs font-bold text-white">+ Add Feedback</button>
                    </div>
                </div>
            </header>

            {showSortOptions && (
                <div className="absolute rounded-lg bg-white cursor-pointer" style={{ left: '58px', top: '112px', boxShadow: '0 10px 40px -7px rgba(55, 63, 104, 0.35)'  }}>
                    <SortOption onClick={() => { sortFeedbacks('mostUpvotes'); setShowSortOptions(false); }} textContent={"Most Upvotes"}/>
                    <SortOption onClick={() => { sortFeedbacks('leastUpvotes'); setShowSortOptions(false); }} textContent={"Least Upvotes"}/>
                    <SortOption onClick={() => { sortFeedbacks('mostComments'); setShowSortOptions(false); }} textContent={"Most Comments"}/>
                    <SortOption onClick={() => { sortFeedbacks('leastComments'); setShowSortOptions(false); }} textContent={"Least Comments"}/>
                </div>
            )}

            <div className="h-screen p-6 bg-slate-100 flex flex-col gap-6 w-3/4" style={{ display: sidebarVisible ? 'flex' : 'none' }}>
                <div className='bg-white rounded-lg flex flex-wrap gap-2 p-6'>
                    <button className="p-1.5 md:p-2.5 lg:p-3 rounded-lg bg-blue-100 text-blue-600 text-sm md:text-base font-semibold" onClick={() => handleCategoryClick(null)}>All</button>
                    {sortedFeedbacks.map((feedback)=>{
                        return <Category key={feedback.id} onClick={() => handleCategoryClick(feedback.category)} theCategory={feedback.category}/>
                    })}
                </div>

                <div className='bg-white rounded-lg flex flex-col p-6 gap-6'>
                    <div className='flex justify-between items-center'>
                        <p className="text-lg md:text-xl font-bold tracking-wide text-gray-700">Roadmap</p>
                        <p className="text-xs md:text-xl font-bold tracking-wide text-blue-600 underline">View</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {getStatusCounts().map((status, id) => {
                            return (
                                status.status === "suggestion" ? null :
                                <div className='flex justify-between' key={id} onClick={() => handleCategoryClick(status.status)}>
                                    <p className="text-base text-gray-700">{status.status}</p>
                                    <p className="text-base text-gray-700 font-bold">{status.count}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
           </div>

            <main className="bg-slate-100 p-6 flex gap-4 flex-col" style={{ opacity: opacity}}>
                {sortedFeedbacks
                    .filter(feedback => selectedCategory === null || feedback.category === selectedCategory)
                    .map((feedback) => {
                        return (
                            <Feedback key={feedback.id} feedback={feedback} onClick={() => handleUpvote(feedback.id)}/>
                        );
                    })
                }
            </main>
        </div>
    );
}
