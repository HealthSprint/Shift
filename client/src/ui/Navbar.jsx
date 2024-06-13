import React, { useEffect, useState } from 'react'

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
    setIsLogged(false)
  }
  return (
    <nav>
      <div className=''>
        <ul className=' bg-slate-950 hover:bg-gradient-to-r from-slate-800 to-slate-950 h-20  items-center list-none flex w-full text-lg font-semibold  text-white gap-4'>
          <li className=' font-serif text-2xl flex justify-center rounded-full items-center hover:cursor-pointer  h-1/2 w-20 ml-10 mr-52'>Shift</li>
          <li className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-400 h-1/2 w-20 ml-52'>Home</li>
          <li className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-400 h-1/2 w-20'>About</li>
          <li className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-400 h-1/2 w-20 mr-52'>Blogs</li>
          {!isLogged && <div className=' flex h-1/2 gap-4'>
            <a href='/auth/signup' className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-400 w-20 ml-60'>SignUp</a>
            <a href='/auth/login' className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-400  w-20'>Login</a>
          </div>}
          {isLogged && <li onClick={Logout} className=' flex justify-center rounded-full items-center hover:cursor-pointer hover:bg-slate-400 h-1/2 w-20'>
            Logout
            </li>}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar