import Post from "../PostThumbnail"
import { Link } from "react-router-dom"

export default function ProfilePosts({posts}) {

    return (
            <div className="overflow-y-auto flex flex-col gap-5 max-h-60-screen">
                {posts && posts.map(post => (
                    <Post postData={post} key={post._id} />
                ))}
            </div>
    )
}