import { UserCard } from "./userCard";

export function UserList({users, onUserSelect}){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8  min-h-screen">
            {users.map(user =>
            <UserCard
            key={user.id}
            user={user}
            onSelect={() => onUserSelect(user)}
            />)}
        </div>
    )
}