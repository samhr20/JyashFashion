import React, { useEffect } from 'react'
import Banner from '../components/ui/Banner'
import ReviewSection from '../components/ui/ReviewSection'
import FeautredSection from '../components/ui/FeautredSection'
import TopSellingSection from '../components/ui/TopSellingSection'
import useCart from '../contexts/CartContext'

const Home = () => {

  return (
     <>
       <Banner/>
       <FeautredSection/>
       <TopSellingSection/>
       <ReviewSection/>
     </>    
      )
}

export default Home