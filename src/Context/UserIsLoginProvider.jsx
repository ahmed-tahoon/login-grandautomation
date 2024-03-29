


import React, { createContext, useEffect, useState } from 'react'
import userService from '../Services/userService';


export const userIsLoginContext = createContext()



function UserIsLoginProvider({ children }) {

    const [authData, setAuthData] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('auth'));


    useEffect(() => {
        if (token) {
            userService.getUserData().then((res) => {
                if (res.success) {
                    setAuthData(res.data)
                }
            }).catch((error) => {
                console.log(error);
            });

        }
    }, [token])

    return (

        <userIsLoginContext.Provider value={{ authData, setAuthData, setToken }}>
            {children}
        </userIsLoginContext.Provider>
    )
}

export default UserIsLoginProvider
