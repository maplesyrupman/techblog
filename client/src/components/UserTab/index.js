

export default function UserTab({user}) {
    const {username, followerCount, followingCount, articlesCount} = user

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