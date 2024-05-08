import Category from "./Category";
import Hamburger from "/assets/shared/mobile/icon-hamburger.svg";
import Close from "/assets/shared/mobile/icon-close.svg";
import ArrowDown from "/assets/shared/icon-arrow-down.svg";
import ArrowUp from "/assets/shared/icon-arrow-up.svg";
import SuggestionImg from "/assets/suggestions/icon-suggestions.svg";
import { MyContext } from "../../App";
import { useContext } from "react";

export default function Header({
  sidebarVisible,
  setSidebarVisible,
  opacity,
  setOpacity,
  uniqueCategories,
  getStatusCounts,
  sortedFeedbacks,
  sortBy,
  showSortOptions,
  handleCategoryClick,
  setShowSortOptions,
  selectedCategory,
}) {
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setOpacity(sidebarVisible ? 1 : 0.5);
  };

  const context = useContext(MyContext);
  return (
    <header className="md:flex md:flex-col md:gap-[40px]">
      <div className="headerImg w-full flex gap-2 justify-between items-center  py-4 px-6 md:bg-none lg:flex-col lg:gap-4">
        <div className="titleBackground md:w-[223px] md:h-[178px] md:p-6 rounded-lg md:flex md:flex-col md:justify-end">
          <p className="text-base font-bold tracking-tight text-white md:text-xl">
            Frontend Mentor
          </p>
          <p className="text-xs font-medium text-white opacity-75 md:text-base">
            Feedback Board
          </p>
        </div>

        <img
          className="cursor-pointer md:hidden"
          src={sidebarVisible ? Close : Hamburger}
          alt="icon hamburger"
          onClick={toggleSidebar}
        />

        <div className="hidden bg-white rounded-lg md:flex flex-wrap items-start w-[200px] gap-2 p-6 ">
          <button
            className={`p-1.5 md:p-2.5 lg:p-3 rounded-lg ${
              selectedCategory === null
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600"
            } text-sm md:text-base font-semibold`}
            onClick={() => handleCategoryClick(null)}
          >
            All
          </button>
          {uniqueCategories.map((category, index) => {
            return (
              <Category
                key={index}
                onClick={() => handleCategoryClick(category)}
                theCategory={category}
                isSelected={selectedCategory === category}
              />
            );
          })}
        </div>

        <div className="hidden bg-white rounded-lg md:flex flex-col p-6 gap-6 rounded-lg">
          <div className="flex justify-between items-center gap-4">
            <p className="text-lg md:text-xl font-bold tracking-wide text-gray-700">
              Roadmap
            </p>
            <p
              className="text-xs md:text-xl font-bold tracking-wide text-blue-600 hover:text-blue-400 underline cursor-pointer"
              onClick={() => context.navigate("/feedbacks/roadmap")}
            >
              View
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {getStatusCounts().map((status, id) => {
              return status.status === "suggestion" ? null : (
                <div
                  className="flex justify-between"
                  key={id}
                  onClick={() => handleCategoryClick(status.status)}
                >
                  <p className="text-base text-gray-700">{status.status}</p>
                  <p className="text-base text-gray-700 font-bold">
                    {status.count}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="py-2 px-6 bg-sky-950 flex justify-between items-center md:rounded-lg lg:hidden"
        style={{ opacity: opacity }}
      >
        <div className="hidden md:flex items-center gap-3">
          <img src={SuggestionImg} alt="ico suggestion" />
          <p className="text-white text-lg font-bold tracking-tighter">
            {sortedFeedbacks.length} Suggestions
          </p>
        </div>

        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => setShowSortOptions(!showSortOptions)}
        >
          <p className="text-xs text-white font-bold">
            <span className="font-normal opacity-75">Sort by : </span>
            {sortBy === "mostUpvotes"
              ? "Most Upvotes"
              : sortBy === "leastUpvotes"
              ? "Least Upvotes"
              : sortBy === "mostComments"
              ? "Most Comments"
              : "Least Comments"}
          </p>
          <img
            src={showSortOptions ? ArrowUp : ArrowDown}
            alt="arrow down icon"
          />
        </div>
        <button
          className="px-4 py-3 rounded-lg bg-purple-600 text-xs font-bold text-white"
          onClick={() => {
            context.navigate("new-feedback");
            console.log("hi");
          }}
        >
          + Add Feedback
        </button>
      </div>
    </header>
  );
}
