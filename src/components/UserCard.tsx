import { UserParam } from "../types/users"



interface Props {
    user: UserParam,
    onClick: (userId: number) => void;
}
function UserCard({ user, onClick }: Props) {
    return (
        <>
            <div className="card mb-5" onClick={() => onClick(user.id)}>
                <div>
                    {user.id}
                </div>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.username}
                </div>
                <div>
                    {user.phone}
                </div>
                <div>
                    {user.email}
                </div>
                <div>
                    {user.website}
                </div>
            </div>
        </>
    )
}

export default UserCard