import React from 'react';
import team_img_large from '../../assets/about/desktop/image-team-members.jpg'
import team_img_medium from '../../assets/about/tablet/image-team-members.jpg'
import team_img_small from '../../assets/about/mobile/image-team-members.jpg'
import ReadyToStart from '../../components/ReadyToStart';

const About = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='mx-64 mt-40'>
        <h1 className='font-DMserif mt-16 text-6xl text-txt-color-1'>
        We empower innovators by <br/>
        delivering access to the <br/>
        financial system</h1>
        <div className='flex flex-col gap-y-16 my-16'>
          <div className='grid grid-cols-3'>
            <h3 className='text-4xl font-DMserif text-txt-color-1'>Our Vison</h3>
            <p className='col-span-2 font-PublicSans font-light text-slate-500'>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure.
            The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. 
            We are deeply focused on democratizing financial services through technology.</p>
          </div>

          <div className='grid grid-cols-3'>
            <h3 className='text-4xl font-DMserif text-txt-color-1'>Our Vison</h3>
            <p className='col-span-2 font-PublicSans font-light text-slate-500'>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure.
            The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. 
            We are deeply focused on democratizing financial services through technology.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center px-2 mb-20'>
      <img className='hidden lg:block' src={team_img_large} alt='team members desktop image'/>
      <img className='hidden md:block lg:hidden' src={team_img_medium} alt='team members tablet image'/>
      <img className='block md:hidden' src={team_img_small} alt='team members mobile image' />
      </div>

      <ul className='mx-32 gap-x-10 grid grid-cols-3'>
          <li className='border-y-2 border-slate-300 py-4'>
            <p className='text-slate-500 font-PublicSans mb-4'>Team Members</p>
            <p className='text-6xl text-button-primary font-DMserif font-medium tracking-wide'>300+</p>
          </li>

          <li className='border-y-2 border-slate-300 py-4'>
            <p className='text-slate-500 font-PublicSans mb-4'>Offices in the US</p>
            <p className='text-6xl text-button-primary font-DMserif font-medium tracking-wide'>3</p>
          </li>

          <li className='border-y-2 border-slate-300 py-4'>
            <p className='text-slate-500 font-PublicSans mb-4'>Transactions analyzed</p>
            <p className='text-6xl text-button-primary font-DMserif font-medium tracking-wide'>10M+</p>
          </li>
      </ul>

      <div className='mx-64 mt-12 mb-32 flex flex-col gap-y-16'>
          <div className='grid grid-cols-3'>
            <h3 className='text-4xl font-DMserif text-txt-color-1'>Our Culture</h3>
            <p className='col-span-2 font-PublicSans font-light text-slate-500'>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, 
            whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
            We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
          </div>

          <div className='grid grid-cols-3'>
            <h3 className='text-4xl font-DMserif text-txt-color-1'>The People</h3>
            <p className='col-span-2 font-PublicSans font-light text-slate-500'>We're all passionate about building a more efficient and inclusive financial infrastructure together. 
            At PayAPI, we have diverse backgrounds and skills.</p>
          </div>
      </div>

      <ReadyToStart/>
    </section>
  )
}

export default About