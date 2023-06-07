import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import Logo from '../assets/shared/desktop/logo.svg'
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='relative'>
    <div className='absolute w-full z-20'>
    <div className='mx-32 p-4 mt-4 flex items-center justify-between'>
        <div className='w-[35%] flex items-center justify-between
        text-slate-500 font-medium font-PublicSans text-md '>
            <Link to="/"><img src={Logo}/></Link>
            <NavLink className={({isActive}) => (isActive ? "text-slate-700" : "")} to="/pricing">Pricing</NavLink>
            <NavLink className={({isActive}) => (isActive ? "text-slate-700" : "")} to="/about">About</NavLink>
            <NavLink className={({isActive}) => (isActive ? "text-slate-700" : "")} to="/contact">Contact</NavLink>
        </div>
        <Button linkto="/pricing" text="Schedule a Demo"/>
    </div>
    </div>
    </nav>
  )
}

export default Navbar