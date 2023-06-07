import React from 'react'
import check from '../assets/shared/desktop/icon-check.svg';

const PricingCard = (props) => {
  const {Name, Price, Features} = props;
  return (
    <div>
        <h3 className='text-4xl mb-20 font-DMserif text-button-primary'>{Name}</h3>
        <p className='text-6xl mb-16 font-DMserif text-txt-color-1'>{Price}</p>
        <ul className='py-4 border-y-2 border-slate-300'>
            {Features.map((Feature) =>{
                const featName = Feature.FeatName;
                const enabled = Feature.enabled;
                return (
                <li className={`grid grid-cols-10 place-content-center font-PublicSans mb-4 ${enabled ? "text-txt-color-1" : "text-slate-400"}`}>
                    <img className={`place-self-center ${enabled ? "inline" : "hidden"}`} src={check}></img>
                    <p className='col-start-2 col-end-10'>{featName}</p>
                </li>
                )
            })}
        </ul>

        <button className='px-6 mt-6 py-3 border-txt-color-1 hover:bg-txt-color-1 hover:text-slate-50 border-2 rounded-full font-PublicSans font-semibold text-txt-color-1'>Request Acces</button>
    </div>
  )
}

export default PricingCard