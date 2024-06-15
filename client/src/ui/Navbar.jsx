import React, { useEffect, useState } from 'react'
import shift from '../assets/shift_transparent.png'

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(()=>{
    if (localStorage.getItem('token')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  },[isLogged])
  const Logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLogged(false)
  }
  return (
    <nav>
      <div className=''>
        <ul className=' bg-slate-950 hover:bg-gradient-to-r from-slate-800 to-slate-950 h-20  items-center list-none flex w-full text-lg font-semibold  text-white gap-4'>
          <img className=' size-20 rounded-full ml-5' src={shift} alt='logo'/>
          <li className=' font-serif text-2xl flex justify-center rounded-full items-center hover:cursor-pointer  h-1/2 w-20 ml-1 mr-52'>SHIFT </li>
          <li className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-800 h-1/2 w-20 ml-52'>Home</li>
          <li className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-800 h-1/2 w-20'>About</li>
          <li className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-800 h-1/2 w-20 mr-24'>Blogs</li>
          {!isLogged && <div className=' flex h-1/2 gap-4'>
            <a href='/auth/signup' className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-800 w-20 ml-60'>SignUp</a>
            <a href='/auth/login' className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-800  w-20'>Login</a>
          </div>}
          {isLogged && <li onClick={Logout} className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-800 ml-80 h-1/2 w-20'>
            Logout
            </li>}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar