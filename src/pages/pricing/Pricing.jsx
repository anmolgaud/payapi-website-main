import React from 'react'
import PricingCard from '../../components/PricingCard'
import {plans} from './data'
import ReadyToStart from '../../components/ReadyToStart'

const Pricing = () => {
  return (
    <section className='relative overflow-hidden min-h-screen'>
      <div className='w-[800px] h-[800px] bg-circle-primary rounded-full
      absolute z-10 -top-[80vh] -right-16' />
      <div className='relative mt-24 z-10 p-4 mx-32'>
        <h1 className='font-DMserif my-16 text-6xl text-txt-color-1'>Pricing</h1>
        <div className='grid grid-cols-3 gap-x-20'>
          {plans.map((item) => (
            <PricingCard {...item}/>
          ))}
        </div>
      </div>
      <ReadyToStart/>
    </section>
  )
}

export default Pricing