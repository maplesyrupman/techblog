import { FaHeart,FaComment } from 'react-icons/fa'
import Auth from '../../utils/auth'
import CommentForm from '../CommentForm'
import Comment from '../Comment'

export default function CommentSection({ comments, likeCount }) {
    return (
        <div className=''>
            <div>
                <span className='whitespace-nowrap'>
                    {likeCount}{' '}
                    <FaHeart className='inline' />
                </span>
                <span>
                    {comments.length}{' '}
                    <FaComment className='inline' />
                    </span>
            </div>
            {Auth.loggedIn() && <CommentForm />}
            <div>
                {comments.map(comment => (
                    <Comment key={comment.author + comment.createdAt} comment={comment} />
                ))}
            </div>
        </div>
    )
}