export default function Category({onClick,theCategory}){
    return <button className="p-1.5 md:p-2.5 lg:p-3 rounded-lg bg-blue-100 text-blue-600 text-sm md:text-base font-semibold" onClick={onClick}>
    {theCategory}
        </button>
}