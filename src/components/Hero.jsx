import React from 'react'
import phoneMockup from '../assets/home/desktop/illustration-phone-mockup.svg'
import Email from './Email'

const Hero = () => {
  return (
    <section className='h-[100vh] mx-32 grid place-content-center place-items-center grid-cols-3 gap-x-4'>
        <div className='col-span-2 flex flex-col w-full'>
            <h1 className='font-DMserif text-7xl text-txt-color-1'>Start building with <br/> our APIs for <br/> absolutely free.</h1>
            <Email/>
            <p className='mt-4 ml-6 font-PublicSans font-light text-slate-400'>Have any question? <span className='text-slate-500 font-medium'>Contact Us</span></p>
        </div>

        <div className=''>
            <img className='' src={phoneMockup} alt='Phone Header'/>
        </div>

    </section>
  )
}

export default Hero