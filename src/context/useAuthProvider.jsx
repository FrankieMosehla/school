import axios from 'axios'
import { createContext, useEffect, useState } from 'react';

export const Authcontext = createContext();
export default function Authprovider ({children}) {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsloading] = useState(true)

    const getCurrentuser = async () => {
        try {
            const res = await axios.get('http://localhost:8081/api/user', {withCredentials : true});
            if(res.status === 200) {
                setIsAuthenticated(true);
                console.log(res, 'j')
            } else {
                // console.log(res)
            }
            setIsloading(false)
        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }

    useEffect(() => {
        getCurrentuser();
    }, []);

    return (
        <Authcontext.Provider value={{isAuthenticated, setIsAuthenticated, isLoading}}>
            {children}
        </Authcontext.Provider>

    )

} 