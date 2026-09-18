
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import CallToAction from './component/CallToAction'

import Footer from './component/Footer'
import NavBar from './component/NavBar'
import PricingCard from './component/PricingCard'
import Products from './component/Products'
import Rating from './component/Rating'
import StepSection from './component/StepSection'



const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const productsPromise = getProducts();


function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <Banner />
      <Rating />
      <Products productsPromise={productsPromise} cart={cart} setCart={setCart} />
      <StepSection />
      <PricingCard />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
