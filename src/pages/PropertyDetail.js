import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import PropertyImages from '../components/PropertyImages';
import millify from 'millify';
import Img from '../components/Lazyimage'
import {GoVerified} from 'react-icons/go'
import {FaBed,FaBath} from 'react-icons/fa'
import { IoLocationSharp} from 'react-icons/io5'
import { BsGridFill } from 'react-icons/bs'


const PropertyDetail = () => {
  const {loader,setLoader,options,baseurl}=useContext(AppContext);

  let [details,setDetails]=useState([]);
  const params=useParams();
  const propertyId=params.id
  
  async function fetchApi(){
    setLoader(true);
    try{
      let data=await fetch(`${baseurl}/properties/detail?externalID=${propertyId}`,options);
      let result=await data.json();
      setDetails(result)
      console.log(result);
    }
    catch(err){
      console.log('error occured',err);
    }
    finally{
      setLoader(false);
    }
  }
  useEffect( ()=>{
    fetchApi();
  },[params]);

  return (
    <>
      {
        loader===true?<Loader></Loader>:<div className=" flex flex-col gap-6 text-white bg-neutral-900 p-6">
        <div>
        
        <PropertyImages photos={details?.photos}></PropertyImages>
        
        </div>
        <h1 className=" text-3xl font-bold">{details?.title}</h1>
        <h1 className=" text-2xl font-bold">${millify(details?.price)}</h1>
        <div className=" flex gap-4 items-center">
         <Img class={" h-[50px]"} src={details?.agency?.logo?.url}></Img>
         <h1 className=" font-bold">{details?.agency?.name}</h1>
        </div>
        <div className=" flex gap-3">
        {details?.isVerified===true?<GoVerified color="green"></GoVerified>:""} {details?.rooms} <FaBed className=" text-blue-800"></FaBed> | {details?.baths} <FaBath className=" text-blue-800"></FaBath> |  {millify(details?.area)}sqft <BsGridFill className=" text-blue-800"></BsGridFill>
        </div>
       {/* <div className=" flex gap-1 items-center"><IoLocationSharp className=" text-red-800"></IoLocationSharp>{details?.location[2]?.name+","+details?.location[1]?.name+","+details?.location[0]?.name}</div> */}
        <h1>{details?.description}</h1>
     </div>
      }
    </>
  )
}

export default PropertyDetail