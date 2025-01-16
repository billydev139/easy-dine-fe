import React from 'react'
import DefaultLayout from '../../layouts/defaultLayout'
import Header from '../../components/header'
import HeroSection from '../homePage/heroSection'
import Images from '../../assets/images'

const Pricing = () => {
  return (
    <div>
    <DefaultLayout>
    <HeroSection heroBar={true} image={Images.heroImage} />
    </DefaultLayout>
    </div>
  )
}

export default Pricing