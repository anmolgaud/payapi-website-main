import React from 'react'
import googleWhite from '../assets/shared/desktop/google-white.svg'
import hpWhite from '../assets/shared/desktop/hp-white.svg'
import microsoftWhite from '../assets/shared/desktop/microsoft-white.svg'
import nvidiaWhite from '../assets/shared/desktop/nvidia-white.svg'
import oracleWhite from '../assets/shared/desktop/oracle-white.svg'
import teslaWhite from '../assets/shared/desktop/tesla-white.svg'

const WorkWith = () => {
  return (
    <section className='bg-background-secondary h-[70vh] flex items-center relative overflow-hidden'>
        <div className='bg-circle-secondary w-[700px] h-[700px] rounded-full absolute z-10 -top-[60%] -left-36'/>
        <div className='relative z-20 mx-32 grid place-content-center place-items-center grid-cols-2'>
            <div className='w-[75%] flex flex-col text-slate-200'>
                <h3 className='font-DMserif mt-8 text-5xl'>Who we work with</h3>
                <p className='font-PublicSans mt-4'>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. 
                We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
                <button className='mt-8 border-2 px-8 py-2 self-start border-slate-200 rounded-full'>About Us</button>
            </div>
            <div className=''>
                <ul className='grid grid-cols-3 gap-10'>
                   <li> <img src={teslaWhite}/></li> 
                   <li> <img src={microsoftWhite}/></li> 
                   <li> <img src={hpWhite}/></li> 
                   <li> <img src={oracleWhite}/></li>
                   <li> <img src={googleWhite}/></li> 
                   <li> <img src={nvidiaWhite}/></li> 
                </ul>
            </div>

        </div>

    </section>
  )
}

export default WorkWith