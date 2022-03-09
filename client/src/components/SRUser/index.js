import UserTab from "../UserTab"
import { SEARCH_USER } from "../../utils/queries"
import { useQuery } from "@apollo/client"
import Loading from "../Loading"

export default function SRUser({ queryString }) {
    const { data, loading } = useQuery(SEARCH_USER, { variables: { username: queryString } })

    if (loading) {
        return (<Loading />)
    }
    return (
        <>
            {data.searchUser.length && (
                data.searchUser.map(user => <UserTab user={user} key={user._id} />)
            ) || (
                    <div className="text-center">
                        Sorry, we couldn't find anyone with the username "{queryString}"
                    </div>
                )}
        </>
    )
}