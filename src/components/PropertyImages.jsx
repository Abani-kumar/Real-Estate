import React from 'react'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react'
import Img from '../components/Lazyimage'
import SliderButton from './SliderButton'

const PropertyImages = ({photos}) => {
    console.log(photos);
    
  return (
    <div className=" relative lg:w-[50vw] mx-auto">
      <Swiper slidesPerView={1}>
         <Swipperbuttons></Swipperbuttons>
        {
             photos.map((item,index)=>{
                <div key={index}><SwiperSlide><Img src={item?.url}/></SwiperSlide></div>
            })
        }
      </Swiper>
    </div>
  )
}

export default PropertyImages

const Swipperbuttons=()=>{
    const swipe =useSwiper();
    return(
        <div className=" mx-24 flex gap-2">
              <button onClick={()=>swipe.slidePrev()} className=" absolute top-[50%] left-0 z-40 p-2 rounded-lg bg-blue-700 text-white">&lt;</button>
              <button className=" absolute  top-[50%] right-0  z-50 p-2 bg-blue-700 text-white rounded-lg" onClick={()=>swipe.slideNext()}>&gt;</button>
        </div>
      )
}