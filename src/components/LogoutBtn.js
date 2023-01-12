import {useContext} from "react";
import { CurrentUser } from "../context/CurrentUser";

const LogoutBtn = () => {
    const { setCurrentUser } = useContext(CurrentUser)

    function logout(){
        localStorage.removeItem('token')
        setCurrentUser(null)
        window.location.reload(true)
    }

    return (
        <li><a className="dropdown-item" onClick={logout} href="/">Log Out</a></li>
    )
}

export default LogoutBtn