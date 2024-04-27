import React from 'react'
import Carousel from './eventCarousel'

const EventSidebar = () => {
  return (
    <>
    <Carousel className="align-center"/>
    <br />
    <br />
    <p className="text-2xl font-semibold text-center">Ongoing <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Events</span></p>
    </>
    
  )
}

export default EventSidebar