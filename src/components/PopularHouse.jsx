import React from 'react'
import { housedata } from '../images/houses'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import Img from '../components/Lazyimage'
import SliderButton from './SliderButton'

const PopularHouse = () => {
  return (
    <div className=' flex flex-col gap-5  bg-neutral-900 '>
       <h1 className='text-3xl text-orange-600 text-center'>Popular Houses</h1>
       <div className=' w-[60vw]   mx-auto'>
          <Swiper slidesPerView={3}>
            <SliderButton/>
             {
              housedata.map( (data)=>{
                return <div><SwiperSlide><Img class={'h-[200px] w-[200px]'} src={data}/></SwiperSlide></div>
              })
             }
          </Swiper>
       </div>
    </div>
  )
}

export default PopularHouse