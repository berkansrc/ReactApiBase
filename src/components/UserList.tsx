import { useEffect, useState } from "react"
import { UserParam } from "../types/users"
import { fetchUsers } from "../services/api";
import UserCard from "./UserCard";
import PostList from "./PostList";
import FilterSearch from "./FilterSearch"; 
function UserList() {
    const [users, setUsers] = useState<UserParam[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsers()
            setUsers(data)
        }
        getUsers()
    }, [])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(filteredUsers);
    return (
        <>

            <div className="button-style  ">
                <FilterSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>


            {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} onClick={(id) => setSelectedUserId(id)} />
            ))
            }


            <PostList userId={selectedUserId} onClose={() => setSelectedUserId(null)} />


        </>
    )
}

export default UserList