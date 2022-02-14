import PostThumbnail from '../../components/PostThumbnail'
import { QUERY_POSTS } from '../../utils/queries'
import { useQuery } from '@apollo/client'

export default function Home() {
    const {data, loading} = useQuery(QUERY_POSTS)
    const {posts} = data || {}
    if (data) {
        console.log(data)
    }

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className='py-12'>
            {posts.map(post => <PostThumbnail postData={post} key={post._id}></PostThumbnail>)}
        </div>
    )
}