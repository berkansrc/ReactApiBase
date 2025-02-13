import { useEffect, useState } from "react"
import { UserParam } from "../types/users"
import { fetchUsers } from "../services/api";
import UserCard from "./UserCard";
import PostList from "./PostList";

function UserList() {
    const [users, setUsers] = useState<UserParam[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsers()
            setUsers(data)
        }
        getUsers()
    }, [])
    return (
        <>

            {
                users.map((user) => (
                    <UserCard key={user.id} user={user} onClick={(id) => setSelectedUserId(id)} />
                ))
            }

            <PostList userId={selectedUserId} onClose={() => setSelectedUserId(null)} />
        </>
    )
}

export default UserList