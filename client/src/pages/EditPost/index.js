import PostForm from "../../components/PostForm"
import { useQuery } from "@apollo/client"
import { QUERY_SINGLE_POST } from "../../utils/queries"
import { useParams } from "react-router-dom"

export default function EditPost() {
    const { postId } = useParams()
    const {data, loading} =  useQuery(QUERY_SINGLE_POST, {variables: {postId}})
    const post = data ? data.post : {}

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div>
                <PostForm isEdit={true} post={post}/>
            </div>
        )
    }

}