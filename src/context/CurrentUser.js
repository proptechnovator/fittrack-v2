import { createContext, useState, useEffect } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5500/authentication/profile', {
                credentials: 'include', 
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            
            let user = await response.json()       
            setCurrentUser(user)
            console.log('test')
        }
        getLoggedInUser()
    }, [setCurrentUser])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider