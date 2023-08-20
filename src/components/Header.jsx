import React from 'react'
import CountUp from 'react-countup'
import heroimage from '../images/extras/hero-image.png'
import Img from '../components/Lazyimage';

const Header = () => {
  return (
    <div className='lg:flex justify-around items-center w-[100vw] lg:h-[80vh] text-white bg-neutral-900'>
        <div className='flex flex-col gap-14'>
            <h1 className='text-5xl'>
               Discover <br></br>Most Suitable<br></br>Property
            </h1>

            <div className='flex gap-5'>
                <div className='flex flex-col items-center text-2xl'>
                    <p><CountUp start={1} end={9999} duration={3}></CountUp><span className='text-3xl text-orange-600'>+</span></p>
                    <h1>Happy Customers</h1>
                </div>
                <div className='flex flex-col items-center text-2xl'>
                    <p><CountUp start={1} end={999} duration={3}></CountUp><span className='text-3xl text-orange-600'>+</span></p>
                    <h1>Availaible Houses</h1>
                </div>
                <div className='flex flex-col items-center text-2xl'>
                    <p><CountUp start={1} end={99} duration={3}></CountUp><span className='text-3xl text-orange-600'>+</span></p>
                    <h1>Total Awards</h1>
                </div>
            </div>
            <h1 className='text-2xl text-blue-800'>Forget All Difficulties In Finding Home</h1>
        </div>
        <div>
            <Img  class={'mx-0 animate border-4 border-blue-950 rounded-t-[15rem] w-[20rem] h-[25rem]'} src={heroimage} alt='House'/>
        </div>
    </div>
  )
}

export default Header