export default function SortOption({onClick, textContent}){
    return <div className="text-xs text-blue-gray-600 border-b border-blue-gray-700 py-2 px-5" onClick={onClick}>{textContent}</div>
}