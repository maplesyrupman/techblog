export default function Comment({ comment }) {
    return (
        <div className='border rounded-lg my-2 px-3 py-2'>
            <div className="text-left">
                {comment.username}
            </div>
            <div className="p-2">
                <p className="text-left">{comment.commentBody}</p>
            </div>
            <div className="text-right italic font-light">
                {comment.createdAt}
            </div>
        </div>
    )
}