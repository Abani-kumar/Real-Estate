import React from 'react'
import img1 from '../images/houses/house3.png'
import img2 from '../images/houses/house4.png'
import Card from './Card'

const Explore = () => {
  return (
    <div className='flex justify-around items-center h-[50vh]'>
        <Card imagelink={img1} h1={"Rent A Home"} h2={"Rental Homes For Everyone"} desc={"Explore Appartments,Homes and manymore"} btntext={"Explore Renting"} btnlink={"/rent"}/>

        <Card  imagelink={img2} h1={"Buy A Home"} h2={"Find, Buy & Own your Dream Home"} desc={"Explore Appartments,Homes and manymore"} btntext={"Explore Buying"} btnlink={"/sell"}></Card>
    </div>
  )
}

export default Explore