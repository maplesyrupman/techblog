import UserTab from "../UserTab"
import { SEARCH_USER } from "../../utils/queries"
import { useQuery } from "@apollo/client"

export default function SRUser({ queryString }) {
    const {data, loading} = useQuery(SEARCH_USER, {variables: {username: queryString}})

    return (
        <>
            {loading && <div>Loading...</div>}
            {data && (
                data.searchUser.map(user => <UserTab user={user} key={user._id} />)
            )}
        </>
    )
}