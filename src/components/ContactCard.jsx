import React from 'react'

const ContactCard = ({icon,name,number,task}) => {
  return (
    <div className='flex flex-col gap-2 bg-neutral-700 border-1 shadow-lg p-3 rounded-lg hover:scale-110'>
        <div className='flex gap-3 items-center'>
            <div className='bg-blue-800 p-2 rounded-lg text-2xl'>{icon}</div>
            <div>
                <h1 className="  text-blue-800 font-bold text-xl">{name}</h1>
                <h1 className=" text-white ">{number}</h1>
            </div>
        </div>
        <button className=" hover:scale-105 duration-700 hover:bg-blue-700 hover:text-white p-2 rounded-lg text-blue-700 bg-blue-300">{task}</button>
    </div>
  )
}

export default ContactCard