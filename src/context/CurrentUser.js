import { createContext, useState, useEffect } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch('https://fitrack-v2.herokuapp.com/authentication/profile', {
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