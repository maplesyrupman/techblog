import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_SINGLE_POST } from '../../utils/queries'
import CommentSection from '../../components/CommentSection'
import Tag from '../../components/Tag'

export default function SinglePost() {
    const { postId } = useParams()
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { postId: postId }
    })
    const post = data?.post || {}

    const navigate = useNavigate()

    function parsePostBody(section, key) {
        if (section[0] === '#') {
            return (
                <h3 className='text-lg font-bold text-left text-gray-800' key={key}>
                    {section.substring(1)}
                </h3>
            )
        } else {
            return (
                <p className='text-md my-2 text-left text-black' key={key}>
                    {section}
                </p>
            )
        }
    }

    function navigateUser() {
        navigate(`/user/${post.authorId}`)
    }

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
                <div className='pb-8'>
                    <div className="py-3 px-6 rounded-t-lg bg-main-light flex justify-between">
                        <div className='flex'>
                            <h5 className="text-3xl font-medium font-mono leading-none">{post.title}</h5>
                            <div className='flex flex-col-reverse pl-1'>
                                <p className=''>
                                    {' '}by <span
                                        className='hover:cursor-pointer hover:text-flame'
                                        onClick={navigateUser}
                                    >
                                        {post.author}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col-reverse'>
                            <p
                                className=''
                            >
                                {post.createdAt}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-tertiary">
                        <div className="text-base mb-4">
                            {post.text.map(parsePostBody)}
                        </div>
                    </div>
                    <div className='p-4 flex gap-2 bg-main-light rounded-b-lg'>
                        {post.tags.map(tag => <Tag key={tag} tagName={tag} readMode={true} />)}
                    </div>
                </div>
                <div className='border-2 rounded-xl w-full'>
                    <CommentSection comments={post.comments} likeCount={post.likeCount} dislikeCount={post.dislikeCount} postId={post._id} />
                </div>
            </div>
        </div>
    )
}