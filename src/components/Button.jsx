import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const {text, linkto} = props;
  return (
    <button className='bg-button-primary hover:bg-button-secondary text-slate-50
    px-6 py-3 rounded-full font-semibold font-PublicSans'>
        <Link to={linkto}>{text}</Link>
    </button>
  )
}

export default Button