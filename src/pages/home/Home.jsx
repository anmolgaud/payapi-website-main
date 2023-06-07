import React from 'react'
import Hero from '../../components/Hero'
import WorkWith from '../../components/WorkWith'
import Features from '../../components/Features'
import ReadyToStart from '../../components/ReadyToStart'
const Home = () => {
  return (
    <main className='relative overflow-hidden'>
      <div className='bg-circle-primary absolute z-10 -right-32 -top-48 w-[800px] h-[800px] rounded-full'/>
      <div className='relative mt-16 z-10'>
      <Hero/>
      <WorkWith/>
      <Features/>
      <ReadyToStart/>
      </div>
    </main>
  )
}

export default Home