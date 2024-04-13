import React from 'react'
import Hero from "../Components/Hero/Hero"
import Popular from '../Components/Popular/Popular'
import { Offer } from '../Components/offers/Offer'
import { Newc } from '../Components/Newcollections/Newc'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    // <div>Shop</div>
    <div>
    <Hero />
    <Popular />
    <Offer />
    <Newc />
    <Newsletter />
    
    </div>
  )
}

export default Shop