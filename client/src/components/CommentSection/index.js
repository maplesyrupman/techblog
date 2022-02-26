import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import Auth from '../../utils/auth'
import Comment from '../Comment'

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_COMMENT, LIKE_DISLIKE } from '../../utils/mutations'


export default function CommentSection({ comments, likeCount, dislikeCount, postId }) {

    const [comment, setComment] = useState('')
    const [addComment] = useMutation(ADD_COMMENT)
    const [likeDislike] = useMutation(LIKE_DISLIKE)

    function handleChange(e) {
        setComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!comment) {
            return 
        }
        addComment({variables: {postId, commentBody: comment}})
        e.target.reset()
    }

    function handleLikeDislike(e) {
        const isLike = e.currentTarget.dataset.value == 'like' ? true : false
        likeDislike({variables: {postId, isLike}})
    }

    return (
        <div className='px-12 py-4'>
            <div className='pb-2'>
                <div className='flex gap-1'>
                    <span>
                        {likeCount} Likes
                    </span>
                    <span>
                        {dislikeCount} Dislikes
                    </span>
                    {Auth.loggedIn() && (
                        <div 
                        className='inline-flex'
                        >
                            <FaArrowUp 
                            className='mx-1 hover:cursor-pointer hover' 
                            data-value='like'
                            onClick={handleLikeDislike}
                            />
                            <FaArrowDown 
                            className='mx-1 hover:cursor-pointer'
                            data-value='dislike'
                            onClick={handleLikeDislike}
                            />
                        </div>
                    )}
                </div>
                <div className='flex'>
                    <span>
                        {comments.length}{' '}
                        Comments
                    </span>
                </div>
            </div>
            {Auth.loggedIn() && (
                <form
                    onSubmit={handleSubmit}
                    className=''
                >
                    <div>
                        <textarea
                            rows={3}
                            className='resize-none  w-full'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex justify-end'>
                        <button
                            className='bg-gray-200 hover:bg-flame text-white font-bold py-2 px-4 rounded'
                            type='submit'>Submit</button>
                    </div>
                </form>
            )}
            <div className='max-h-96 overflow-auto'>
                {comments.length && (comments.map(comment => (
                    <Comment key={comment._id} comment={comment} />
                ))) || (
                        <div>
                            No Comments Yet!
                        </div>
                    )}
            </div>
        </div>
    )
}