import { createContext, useState, useEffect } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const getLoggedInUser = async () => {
<<<<<<< HEAD
            let response = await fetch(`/authentication/profile`, {
=======
            let response = await fetch('http://localhost:5500/authentication/profile', {
>>>>>>> main
                credentials: 'include', 
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            
            let user = await response.json()       
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [currentUser])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider