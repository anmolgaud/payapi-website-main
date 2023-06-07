import React from 'react'
import Email from './Email'
const ReadyToStart = () => {
  return (
    <div className='mx-32 my-16 w-full grid grid-cols-3 gap-x-8 items-center'>
        <h1 className='text-6xl font-DMserif text-txt-color-1'>Ready to start?</h1>
        <div className='col-span-2 w-[80%] place-self-end'>
            <Email/>
        </div>
    </div>
  )
}

export default ReadyToStart