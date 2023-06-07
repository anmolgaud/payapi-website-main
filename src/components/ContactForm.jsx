import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-[70%] my-16'>
        <form className="flex flex-col gap-y-4" action='#'>
            <input className='h-8 border-b-2 border-slate-400 pb-6 pt-4 px-4 bg-transparent focus:outline-none' id="name" type="text" placeholder='Name'/>
            <input className='h-8 border-b-2 border-slate-400 pb-6 pt-4 px-4 bg-transparent focus:outline-none' id="email" type="text" placeholder='Email Address'/>
            <input className='h-8 border-b-2 border-slate-400 pb-6 pt-4 px-4 bg-transparent focus:outline-none' id="companyName" type="text" placeholder='Company Name'/>
            <input className='h-8 border-b-2 border-slate-400 pb-6 pt-4 px-4 bg-transparent focus:outline-none' id="title" type='text' placeholder='Title' />
            <textarea className='border-b-2 border-slate-400 pb-6 pt-4 px-4 bg-transparent focus:outline-none' rows={2} id="message" type="text" placeholder='Message'/>
            <div className='flex items-center justify-evenly'>
            <input className='w-6 h-6 ' id="updates" type='checkbox'/>
            <label for="updates">Stay up-to-date with company announcements and <br/> updates to our API</label>
            </div>

            <button className='self-start px-12 py-2 border-[1px] bg-transparent
            rounded-full border-txt-color-1 text-lg text-txt-color-1 hover:text-slate-50 hover:bg-txt-color-1
            font-medium font-PublicSans' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm