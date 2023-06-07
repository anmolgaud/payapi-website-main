import React from 'react'
import Button from './Button'

const Email = () => {
  return (
    <div className='w-[60%] mt-6 pl-4 bg-white rounded-full flex items-center justify-between'>
        <input className="w-[60%] text-slate-500 focus:outline-none bg-transparent placeholder:text-center placeholder:text-slate-500 placeholder:text-lg" type='text' placeholder='Enter email address'/>
        <Button text="Schedule a Demo"/>
    </div>
  )
}

export default Email