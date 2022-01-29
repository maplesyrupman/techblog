export default function Comment({comment}) {
    return (
        <div className='border rounded-lg my-2'>
            <p>{comment.commentBody}</p>
            <p>{comment.username} at {comment.createdAt}</p>
        </div>
    )
}