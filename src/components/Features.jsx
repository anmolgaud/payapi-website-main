import React from 'react'
import easy_to_implement from '../assets/home/desktop/illustration-easy-to-implement.svg';
import simple_ui from '../assets/home/desktop/illustration-simple-ui.svg'
import icon_banking from '../assets/home/desktop/icon-banking-and-coverage.svg'
import icon_consumer from '../assets/home/desktop/icon-consumer-payments.svg'
import icon_personal from '../assets/home/desktop/icon-personal-finances.svg'
import FeatureCard from './FeatureCard';

const Features = () => {

    const desc = {
        personal : "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
        banking  : "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
        consumer : "It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    }

  return (
    <section className='relative overflow-hidden mt-8'>
        <div className='mx-32 grid relative z-20 px-8 grid-cols-2 place-items-center gap-x-4'>
            <img src={easy_to_implement} />
            <div className='flex flex-col'>
                <h3 className='text-5xl text-txt-color-1 font-DMserif'>Easy to implement</h3>
                <p className='text-slate-500 mt-8 font-light font-PublicSans'>Our API comes with just a few lines of code. 
                    You’ll be up and <br/> running in no time. 
                    We built our documentation page to integrate <br/> payments functionality with ease.</p>
            </div>
        </div>
        <div className='relative flex items-center justify-center w-full '>
        <div className='bg-circle-primary rounded-full w-[800px] h-[800px]
        absolute -top-28 -right-56 z-10'/>
        </div>
        <div className='mx-32 grid relative z-20 grid-cols-3 place-items-center gap-x-4'>
            <div className='flex flex-col col'>
                <h3 className='text-5xl text-txt-color-1 font-DMserif'>Simple UI & UX</h3>
                <p className='text-slate-500 mt-8 font-light font-PublicSans'> Our pre-built form is easy to integrate in your app or website’s <br/>
                checkout flow and designed to optimize conversion.
                </p>
            </div>
            <img className='col-span-2' src={simple_ui} />
        </div>
        <div className='mx-32 relative z-20 grid grid-cols-3 gap-8 place-content-center place-items-center'>
            <FeatureCard icon={icon_personal} title="Personal Finances" desc={desc.personal}/>
            <FeatureCard icon={icon_banking} title="Banking & Coverage" desc={desc.banking}/>
            <FeatureCard icon={icon_consumer} title="Consumer Payments" desc={desc.consumer}/>

        </div>
    </section>
  )
}

export default Features