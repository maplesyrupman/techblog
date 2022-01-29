import { useParams } from 'react-router-dom'
import {useQuery} from '@apollo/client'
import { QUERY_SINGLE_POST } from '../../utils/queries'
import CommentSection from '../../components/CommentSection'

export default function SinglePost() {
    const {postId} = useParams()
    const {loading, data} = useQuery(QUERY_SINGLE_POST, {
        variables: {postId: postId}
    })
    const post = data?.post || {}

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center py-10 text-secondary">
            <div className="block rounded-lg lg:w-7/12 text-center">
                <div className="py-3 px-6 rounded-t-lg bg-main-light flex items-end justify-between">
                    <h5 className="text-secondary text-3xl font-medium font-mono">{post.title}</h5>
                    <p className="align-baseline">
                        Posted by
                        <span> {post.author} </span> 
                        on {post.createdAt}
                    </p>
                </div>
                <div className="p-6 bg-tertiary rounded-b-lg">
                    <p className="text-gray-700 text-base mb-4">
                        {post.text}
                    </p>
                </div>
            </div>
            <div className='border-2 w-1/2'>
                <CommentSection comments={post.comments} likeCount={post.likes.length} />
            </div>
        </div>
    )
}