import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import DataBoxes from '../Components/DataBoxes'
import Departments from '../Components/Departments'
import QuickActions from '../Components/QuickActions'
import SendNote from '../Components/SendNote'

function Main() {
  return (
    <div className='Main'>
    <Header />
    <Hero />
    <DataBoxes />
    <Departments />
    <QuickActions />
    <SendNote />

    </div>
  )
}

export default Main