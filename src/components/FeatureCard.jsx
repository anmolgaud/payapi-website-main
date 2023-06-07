import React from 'react'

const FeatureCard = (props) => {
    const {icon, title, desc} = props;
  return (
    <div className='flex py-16 flex-col items-center'>
        <img src={icon} />
        <h3 className='text-md mt-6 text-txt-color-1 font-PublicSans font-semibold'>{title}</h3>
        <p className='w-[95%] text-center mt-8 font-PublicSans font-light text-slate-400'>{desc}</p>
    </div>
  )
}

export default FeatureCard