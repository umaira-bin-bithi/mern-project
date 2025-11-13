import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"shoes"} heading={"Unique Top's Shoes"}/>
      <HorizontalCardProduct category={"fashion-accessories"} heading={"Top's Fashion Accessories"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
       <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      
      <VerticalCardProduct category={"computers"} heading={"Computers"}/>
       <VerticalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
     
      <VerticalCardProduct category={"kids"} heading={"Top's Kids Accessories"}/>
     
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
        <VerticalCardProduct category={"clothes"} heading={"Clothes"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home