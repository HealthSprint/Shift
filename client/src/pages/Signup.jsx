import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { URL } from '@/config'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handleSubmit = async () => {
        try{
            const res = await fetch(`${URL}/auth/signup`,
                {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({email,name, password})
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
              else {
                const message= await res.json()
                setError(message)
                console.log(error)
              }
        }catch(err){
            const message= res.json()
            setError(message)
        }
    }
    return (
        <div className='flex  bg-gradient-to-b from-slate-500 to-slate-800  items-center h-screen  '>
            <div className=' ml-auto mr-40 flex flex-col justify-center bg-white bg-opacity-90 p-8 items-center border rounded-lg h-[calc(70vh)] w-[calc(60vh)]  shadow-xl  gap-y-3' >
                <h1 className=' font-bold text-xl mb-5'>Signup</h1>
                <div className=' grid gap-4 w-5/6 '>
                    <Input className=" ring-1 focus-visible:ring-blue-700" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
                    <Input className=" ring-1 focus-visible:ring-blue-700" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
                    <Input className=" ring-1 focus-visible:ring-blue-700" onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
                <div>Already have an Account?
                    <a className=' text-blue-600' href='/auth/login'>  Login</a>
                </div>
                {error && 
                <div>
                    {error}
                </div>
                }
                <Button className="bg-blue-700 hover:bg-blue-500" onClick={handleSubmit}>Signup</Button>
            </div>
        </div>
    )
}

export default Signup