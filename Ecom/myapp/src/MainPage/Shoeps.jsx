import React from 'react'
import Popular from '../Componds/popular/Popular.jsx';
import Hero from '../Hero/Hero.jsx';
import Offers from '../Componds/Offers/Offers.jsx';
import NewCollection from '../Componds/NewColletions/NewCollection.jsx';
import NewLetter from '../Componds/NewLetter/NewLetter.jsx';




const Shoeps = () => {
  return (
    <div>
        <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewLetter/>
      
    </div>
  )
}

export default Shoeps
