import axios from 'axios'
import { React, useEffect, useState,useCallback } from 'react'

const LoginPage = () => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const onChangeCredentials = useCallback(((event, fieldName) => {
        if(fieldName === 'phone') {
            setPhone(event.target.value)
            setError('')
        }
        if(fieldName === 'password') {
            setPassword(event.target.value)
            setError('')
        }
    }),[setPhone, setPassword, setError])

    const login = useCallback(async () => {
        try{
            const response = await axios.post('http://localhost:3001/auth/sign-in', {
            phone,
            password
        })
        setUser(response.data)
        setPhone('')
        setPassword('')
        } catch(err) {
            console.log(err.response);
            setError(err.response.data);
        }
    }, [])


    useEffect(() => {
        if(password.length === 3 && phone.length === 12) {
            login()
        }
    }, [password, login])

    return (
        <div className='App'>
            <input
                type='text'
                placeholder='phone number'
                onChange={(event) => onChangeCredentials(event, 'phone')}
                value={phone}
            />
            <input
                type='text'
                placeholder='password'
                onChange={(event) => onChangeCredentials(event, 'password')}
                value={password}
            />
            <div>
                {user && (
                    <span>{user.name.first} {user.name.last}</span>
                )}
            </div>
            <div>{error}</div>                
        </div>
    )
}


export default LoginPage