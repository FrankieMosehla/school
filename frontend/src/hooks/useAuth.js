import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Authcontext } from "../context/useAuthProvider";

export default function useAuth() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();
    const {setIsAuthenticated} = useContext(Authcontext)


    const sign_up = async () => {
        try {
            const res = await axios.post('http://localhost:8081/api/signup', {
                username,
                email,
                password,
                phone,
                role
            }, {
                withCredentials : true
            });
            if(res.status === 201) {
                console.log(res)
                navigate('/explore')
                setIsAuthenticated(true);
            }
            else {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        setUsername,
        setEmail,
        setPassword,
        setPhone,
        setRole,
        sign_up
    }
}