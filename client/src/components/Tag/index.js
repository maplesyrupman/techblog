

export default function Tag({tagName, setPostState, postState}) {
    function deleteSelf() {
        const newTags = postState.tags
        newTags.delete(tagName)
        
        setPostState({...setPostState, tags: newTags})
    }
    return (
        <div
        onClick={deleteSelf}
        className="rounded-full bg-flame hover:bg-gray-400 hover:cursor-pointer tag max-w-min px-2"
        >
            <p className="whitespace-nowrap">{tagName}</p>
        </div>
    )
}