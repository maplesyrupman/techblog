import PostThumbnail from '../../components/PostThumbnail'
import { QUERY_POSTS } from '../../utils/queries'
import { useQuery } from '@apollo/client'

const testPosts = [
    {
        title: 'Some title',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: 'Someguy',
        date: 'Jan 1, 2022'
    },
    {
        title: 'A Captivating Title',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: 'Differentguy',
        date: 'Jan 1, 2022'
    },
    {
        title: 'Interesting Title',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: 'Randomguy',
        date: 'Jan 1, 2022'
    }
]

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