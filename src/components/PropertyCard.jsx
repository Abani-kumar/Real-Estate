import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../components/Lazyimage'
import { GoVerified } from 'react-icons/go'
import { FaBed ,FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import millify from 'millify'

const PropertyCard = ({coverPhoto,isVerified, price, agency,rentFrequency,title,rooms,area,baths,externalID}) => {
  return (
     <Link to={`/propertydetail/${externalID}`}>
       <div className='text-white'>
         <div>
           <Img class=" h-[270px] w-[400px]  propertyimage  rounded-lg shadow-md" src={coverPhoto?.url}/>
         </div>
         <div className=" flex items-center justify-between gap-3">
           <div className=" flex gap-2 items-center">
             {isVerified===true?<GoVerified color="green" ></GoVerified>:""}
             <h1 className=" font-bold">{`${millify(price)}/${rentFrequency?rentFrequency:""}`}</h1>
           </div>
             <Img class={" h-[20px] w-[50px]"} src={agency?.logo?.url}/>
         </div>
         <div className=" flex  gap-4 items-center">
           {rooms} <FaBed className="text-blue-500"></FaBed>| {baths} <FaBath className="text-blue-500"></FaBath> |  {millify(area)}sqft <BsGridFill className="text-blue-500"></BsGridFill>
         </div>
         <h1 >{title.substring(0,100)}</h1>
       </div>
     </Link>
  )
}

export default PropertyCard