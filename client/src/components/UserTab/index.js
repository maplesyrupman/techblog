import { useNavigate } from "react-router-dom"
import auth from "../../utils/auth"


export default function UserTab({user}) {
    const navigate = useNavigate()
    const {username, followerCount, followingCount, articleCount} = user

    function navigateToProfile() {
        if (auth.loggedIn() && user._id === auth.getProfile().data._id) {
            navigate('/dashboard')
        } else {
            navigate(`/user/${user._id}`)
        }
    }

    return (
        <div 
        className="flex border rounded-full p-4 justify-between hover:bg-flame hover:cursor-pointer"
        onClick={navigateToProfile}
        >
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
                    {articleCount} Articles
                </p>
            </div>
        </div>
    )
}