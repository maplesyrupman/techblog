

export default function Tag({tagName, setPostState, postState, readMode}) {
    function deleteSelf() {
        const newTags = postState.tags
        newTags.delete(tagName)
        
        setPostState({...setPostState, tags: newTags})
    }
    return (
        <div
        onClick={ readMode ? null : deleteSelf}
        className={`rounded-full bg-flame ${readMode ? '' : 'hover:cursor-pointer hover:bg-gray-400'} tag max-w-min h-max px-2`}
        >
            <p className="whitespace-nowrap">{tagName}</p>
        </div>
    )
}