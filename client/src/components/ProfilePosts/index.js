import Post from "../PostThumbnail"

export default function ProfilePosts({ posts }) {

    return (
        <>
            {posts && posts.map(post => (
                <Post postData={post} key={post._id} />
            ))}
        </>
    )
}