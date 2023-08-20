import React from 'react'
import ContactCard from './ContactCard'
import { FiPhoneCall } from 'react-icons/fi'
import { FcVideoCall } from 'react-icons/fc'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import cimage from '../images/houses/house10lg.png';
import Img from '../components/Lazyimage';

const Contact = () => {
  return (
    <div id='contact' className='flex items-center justify-around bg-neutral-900'>
        <div className='flex flex-col gap-3 text-white max-w-[40vw]'>
            <h1 className='text-3xl text-orange-700'>Contact Us</h1>
            <h1 className='text-4xl text-blue-950'>Easy To Contact Us</h1>
            <p className='text-bold text-lg'>We always ready to help by providing the best services for you. We beleive a good blace to live can make your life better.</p>
            <div className='grid grid-cols-2 gap-5'>
                <ContactCard icon={<FiPhoneCall/>} name='Call' number='+917847897690' task='Call Now'/>
                <ContactCard icon={<FcVideoCall/>} name='Video Call' number='+917847897690' task='Video Call Now'/>
                <ContactCard icon={<BsFillChatDotsFill/>} name='Chat' number='+917847897690' task='Chat Now'/>
                <ContactCard icon={<AiFillMessage/>} name='Message' number='+917847897690' task='Message Now'/>
            </div>
        </div>
        <div>
            <Img class={" mx-5 mt-16 w-[20rem] h-[25rem] rounded-t-[15rem]"} src={cimage}/>
        </div>
    </div>
  )
}

export default Contact