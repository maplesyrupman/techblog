import { useNavigate } from "react-router-dom"

export default function Post({postData}) {
    const {title, preamble, author, createdAt} = postData
    const navigate = useNavigate()

    function navigatePost() {
        navigate(`/post/${postData._id}`)
    }
    return (
        <div className="flex justify-center my-10 text-secondary">
            <div className="block rounded-lg lg:w-7/12 text-center">
                <div className="py-3 px-6 rounded-t-lg bg-main-light flex items-end justify-between">
                    <h5 className="text-secondary text-3xl font-medium font-mono hover:cursor-pointer" onClick={navigatePost}>{title}</h5>
                    <p className="align-baseline">
                        <span> {author} </span> 
                        on {createdAt}
                    </p>
                </div>
                <div className="p-6 bg-tertiary rounded-b-lg">
                    <p className="text-gray-700 text-base mb-4">
                        {preamble}
                    </p>
                </div>
            </div>
        </div>
    )
}