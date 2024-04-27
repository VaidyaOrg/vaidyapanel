import React from 'react'
import Carousel from './eventCarousel'
import UserCard from './hcEventCard'

const EventSidebar = () => {
  return (
    <>
    <Carousel className="align-center"/>
    <br />
    <br />
    <p className="text-2xl font-semibold text-center">Ongoing <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Events</span></p>
    <br />
    <br />
    <UserCard className="w-[50vw]"/>
    <br />
    <br />
    <UserCard className="w-[50vw]"/>
    <br />
    <br />

    <p className="text-2xl font-semibold text-center">Past <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Events</span></p>
    <br />
    <br />
    <UserCard className="w-[50vw]"/>
    <br />
    <br />
    <UserCard className="w-[50vw]"/>
    <br />
    <br />
    <UserCard className="w-[50vw]"/>
    <br />
    <br />

    <p className="text-2xl font-semibold text-center">Upcoming <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Events</span></p>
    <br />
    <br />
    <UserCard className="w-[50vw]"/>
    </>
    
  )
}

export default EventSidebar