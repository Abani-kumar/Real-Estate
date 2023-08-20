import React from 'react'
import { NavLink } from 'react-router-dom'
import Img from '../components/Lazyimage';

const Card = ({imagelink,h1,h2,desc,btntext,btnlink}) => {
  return (
    <div className='hover:scale-105 duration-500 text-white flex gap-4 '>
        <div>
            <Img class={'h-[200px] w-[200px]'} src={imagelink}/>
        </div>
        <div className='flex flex-col justify-around'>
            <h1 className='text-3xl font-bold'>{h1}</h1>
            <p>{h2}</p>
            <p>{desc}</p>
            <NavLink to={btnlink}><button className=" hover:scale-105 duration-500 p-2 rounded-md bg-blue-800">{btntext}</button></NavLink>
        </div>
    </div>
  )
}

export default Card