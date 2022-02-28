import Post from "../../components/PostThumbnail"
import SearchBar from '../../components/SearchBar'
import { useQuery } from "@apollo/client"
import { FEED_POSTS } from "../../utils/queries"
import auth from "../../utils/auth"

export default function Feed() {
    const { data, loading } = useQuery(FEED_POSTS, { variables: { followingIds: auth.getProfile().data.followingIds } })
    const feedPosts = data?.feedPosts || []

    if (loading) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="pb-12 w-7/12 mx-auto">
                <SearchBar />
                <div className="flex flex-col gap-5">
                    {feedPosts.map(post => <Post postData={post} key={post._id} />)}
                </div>
            </div>
        )
    }
}