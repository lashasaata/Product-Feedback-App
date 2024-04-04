import Hamburger from "/assets/shared/mobile/icon-hamburger.svg";
import ArrowDown from "/assets/shared/icon-arrow-down.svg";

export default function Feedbacks(){
    return <div className="feedbacks">
        <header>
        <div className="w-full flex justify-between items-center py-4 px-6" style={{backgroundImage: 'radial-gradient(circle at 104% -10%, #e84d70, #a337f6 54%, #28a7ed 103%)', backgroundColor: '#ffffff !important'}}>
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

        <main></main>
    </div>
}