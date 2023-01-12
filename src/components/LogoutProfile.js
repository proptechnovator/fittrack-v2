import {useContext} from "react";
import { CurrentUser } from "../context/CurrentUser";

const LogoutProfile = () => {
    const { setCurrentUser } = useContext(CurrentUser)

    function logout(){
        localStorage.removeItem('token')
        setCurrentUser(null)
        window.location.reload(true)
    }

    return (
        
        <a onClick={logout} href="/"><button className="btn btn-secondary" >Logout</button></a>
    )
}

export default LogoutProfile