import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <div className='flex gap-3 m-7'>
          <Link to={'/'} className='p-2 rounded-lg border-2 bg-purple-800 hover:bg-purple-500 text-white'>User From</Link>
      <Link to={'/login'} className='p-2 rounded-lg border-2 bg-purple-800 hover:bg-purple-500 text-white'>Admin Login</Link>
    </div>
  )
}

export default Nav
