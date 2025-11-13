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
      <HorizontalCardProduct category={"kids"} heading={"Top's kids Accessories"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
  
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
       <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      
      <VerticalCardProduct category={"computers"} heading={"Computers"}/>
       <VerticalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
     
 
     
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      
        <VerticalCardProduct category={"accessories"} heading={"Top's Fashion Acessories"}/>
        <VerticalCardProduct category={"clothes"} heading={"Clothes"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
          <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      
    </div>
  )
}

export default Home