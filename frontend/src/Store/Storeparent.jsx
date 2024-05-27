import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Home } from './Home/Home'
import { Section1 } from './Section1/Section1'
import { Collection } from './Collections/Collection'
import { Essentiel } from './Essentiel/Essentiel'

export const Storeparent = () => {
  
  return (

    <div>
        <Navbar />
        <Home />
        <Section1 />
        <Collection />
        <Essentiel />
    </div>
  )
}
