import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import Loader from '../components/Loader';
import PropertyCard from '../components/PropertyCard';

const Rent = () => {

  const {loader,baseurl,fetchApi,data}=useContext(AppContext);

  useEffect( ()=>{
    fetchApi(`${baseurl}/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25`)
  },[])

  console.log(data);
  return (
    <div className="min-h-[100vh] w-[100vw] lg:grid grid-cols-3 gap-6 p-6 bg-neutral-900 text-white">
      {
        loader?<Loader/>:
        data.length===0 ? <h1>No Data Found</h1>:
        data.map((item)=>{
          return <PropertyCard key={item?.id} {...item}/>
        })
      }
    </div>
  )
}

export default Rent