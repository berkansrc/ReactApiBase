
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserParam } from "../types/users"
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";



interface Props {
    user: UserParam,
    onClick: (userId: number) => void;
}
function UserCard({ user, onClick }: Props) {
    return (
        <>
            <div className="completed " >
                <div className="userCard" onClick={() => onClick(user.id)}>
                    <div>
                       <strong> {user.id}</strong>
                    </div>
                    
                    <div>
                    <FontAwesomeIcon icon={faUser} /> {user.name}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} /> {user.username}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />  {user.phone}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />  {user.email}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGlobe} />  {user.website}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard