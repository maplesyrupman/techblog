import UserTab from "../UserTab"

export default function UsersList({ users }) {


    return (
        <>
            {users.map(user => <UserTab user={user} key={user._id} />)}
        </>
    )
}