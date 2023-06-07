import React from 'react'
import ContactForm from '../../components/ContactForm'
import google from '../../assets/shared/desktop/google.svg'
import hp from '../../assets/shared/desktop/hp.svg'
import microsoft from '../../assets/shared/desktop/microsoft.svg'
import nvidia from '../../assets/shared/desktop/nvidia.svg'
import oracle from '../../assets/shared/desktop/oracle.svg'
import tesla from '../../assets/shared/desktop/tesla.svg'
import ReadyToStart from '../../components/ReadyToStart'

const Contact = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='w-[800px] h-[800px] bg-circle-primary rounded-full
      absolute z-10 -top-[80vh] -right-16' />
      <h1 className='mx-32 mt-40 relative z-20 font-DMserif text-6xl text-txt-color-1'>
       Submit a help request and <br/>
       we’ll get in touch shortly.
      </h1>

      <div className='grid relative z-20 grid-cols-2 place-items-center'>
        <ContactForm/>

        <div className='relative z-20'>
          <p className='font-DMserif text-2xl my-8 text-slate-500'>
          Join the thousands of innovators already <br/>
          building with us
          </p>
          <ul className='grid grid-cols-3 gap-10'>
            <li> <img src={tesla}/></li> 
            <li> <img src={microsoft}/></li> 
            <li> <img src={hp}/></li> 
            <li> <img src={oracle}/></li>
            <li> <img src={google}/></li> 
            <li> <img src={nvidia}/></li> 
          </ul>
        </div>
      </div>
      <ReadyToStart/>
    </section>
  )
}

export default Contact