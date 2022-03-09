import PostThumbnail from '../../components/PostThumbnail'
import SearchBar from '../../components/SearchBar'
import { QUERY_POSTS } from '../../utils/queries'
import { useQuery } from '@apollo/client'
import Loading from '../../components/Loading'

export default function Home() {
    const { data, loading } = useQuery(QUERY_POSTS)
    const { posts } = data || {}

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className='pb-12 w-7/12 mx-auto'>
            <div className=''>
                <SearchBar />
            </div>
            <div className='flex flex-col gap-5'>
                {posts.map(post => <PostThumbnail postData={post} key={post._id}></PostThumbnail>)}
            </div>
        </div>
    )
}