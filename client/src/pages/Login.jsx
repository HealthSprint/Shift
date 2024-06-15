import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import image from '../assets/image.png'
import { URL } from '../config'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async () => {
        const res = await fetch(`${URL}/auth/login`,
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            }
        )
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            const json = data.user;
            const token = data.token;
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            localStorage.setItem('token', token)
            navigate('/');
          }
    }

    return (
        <div className='flex bg-gradient-to-b from-slate-500 to-slate-800 items-center h-screen'>
            <div className=' ml-auto mr-40 flex flex-col justify-center bg-white bg-opacity-90 p-8 items-center border rounded-lg h-[calc(70vh)] w-[calc(60vh)]  shadow-xl  gap-y-3' >
                <h1 className=' font-bold text-xl mb-5'>Login</h1>
                <div className=' grid gap-4 w-5/6 '>
                    <Input className=" ring-1 focus-visible:ring-blue-700" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    <Input className=" ring-1 focus-visible:ring-blue-700" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
                <div>Dont't have an Account?
                    <a className=' text-blue-700' href='/auth/signup'>  Signup</a>
                </div>
                <Button className="bg-blue-700 hover:bg-blue-500" onClick={handleSubmit}>Login</Button>
            </div>
        </div>
    )
}

export default Login