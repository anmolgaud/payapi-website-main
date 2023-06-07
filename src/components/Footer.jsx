import React from 'react'
import logoWhite from '../assets/shared/desktop/logo-white.svg'
import twitter from '../assets/shared/desktop/twitter.svg'
import facebook from '../assets/shared/desktop/facebook.svg'
import linkedIn from '../assets/shared/desktop/linkedin.svg'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-background-secondary overflow-hidden relative py-8 flex justify-between'>
    <div className='relative z-20 mx-32 flex justify-between w-full'>
        <div className=' w-[35%] flex items-center justify-between
        text-slate-500 font-medium font-PublicSans text-md '>
            <Link to="/"><img src={logoWhite}/></Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className=' w-[10%] flex items-center justify-between
        text-slate-500 font-medium font-PublicSans text-md'>
            <a href='#'><img src={facebook}/></a>
            <a href='#'><img src={twitter}/></a>
            <a href='#'><img src={linkedIn}/></a>
        </div>
    </div>
    <div className='absolute z-10 right-64 top-[-3rem] bg-blend-lighten bg-circle-secondary w-[1000px] h-[1000px] rounded-full'>

    </div>
    </footer>
  )
}

export default Footer