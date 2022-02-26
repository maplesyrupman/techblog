import UserTab from "../UserTab"

export default function UsersList({users}) {


    return (
        <div className="flex flex-col gap-2">
            {users.map(user => <UserTab user={user} />)}
        </div>
    )
}