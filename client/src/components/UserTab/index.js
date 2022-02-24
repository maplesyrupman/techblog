

export default function UserTab({username, followerCount, followingCount, articlesCount}) {

    return (
        <div className="flex border rounded-full p-4 justify-between">
            <div>
                <p>{username}</p>
            </div>
            <div className="flex gap-2">
                <p>
                    {followerCount} Followers
                </p>
                <p>
                    {followingCount} Following
                </p>
                <p>
                    {articlesCount} Articles
                </p>
            </div>
        </div>
    )
}