import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../images/extras/logo2.png'

const Navbar = () => {
  return (
    <div className='font-bold lg:flex justify-around p-4 text-white items-center'>
        <Link to="/">
            <div>
                <img src={logo} alt='logo'/>
            </div>
        </Link>
        <div className='flex flex-wrap items-center gap-6'>
            <NavLink to='/search'>search by filter</NavLink>
            <NavLink to="/rent">rent home</NavLink>
            <NavLink to="/buy">buy home</NavLink>
            <a href='#contact'><button className='bg-blue-800 p-2 rounded-md'>contact</button></a>
        </div>
    </div>
  )
}

export default Navbar