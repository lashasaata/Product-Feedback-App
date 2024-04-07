export default function Category({onClick,theCategory, isSelected}){
    return <button  className={`p-1.5 md:p-2.5 lg:p-3 hover:bg-blue-200 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'} text-sm md:text-base font-semibold`} onClick={onClick}>
    {theCategory}
        </button>
}