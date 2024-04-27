import React from 'react'
import Carousel from './eventCarousel'
import UserCard from './hcEventCard'

const EventSidebar = () => {
  return (
    <div className='bg-white ml-5 mr-5 pb-6 pt-4 rounded-md'>
    <Carousel className="align-center"/>
    <br />
    <br />
    <p className="text-2xl font-semibold text-center">Ongoing <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Events</span></p>
    <br />
    <br />
    <UserCard name={'Blood Donation Camp'} date={'15-05-2024'} time={'9:30 A.M. to 4:30 P.M.'} venue={'Sushrut Bhavan'} className="w-[50vw]"/>
    <br />
    <br />
    <UserCard name={'Blood Donation Camp'} date={'15-05-2024'} time={'9:30 A.M. to 4:30 P.M.'} venue={'Sushrut Bhavan'} className="w-[50vw]"/>
    <br />
    <br />

    <p className="text-2xl font-semibold text-center">Past <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Events</span></p>
    <br />
    <br />
    <UserCard name={'Blood Donation Camp'} date={'15-05-2024'} time={'9:30 A.M. to 4:30 P.M.'} venue={'Sushrut Bhavan'} className="w-[50vw]"/>
    <br />
    <br />
    <UserCard name={'Blood Donation Camp'} date={'15-05-2024'} time={'9:30 A.M. to 4:30 P.M.'} venue={'Sushrut Bhavan'} className="w-[50vw]"/>
    <br />
    <br />
    <UserCard name={'Blood Donation Camp'} date={'15-05-2024'} time={'9:30 A.M. to 4:30 P.M.'} venue={'Sushrut Bhavan'} className="w-[50vw]"/>
    <br />
    <br />

    <p className="text-2xl font-semibold text-center">Upcoming <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">Events</span></p>
    <br />
    <br />
    <UserCard name={'Blood Donation Camp'} date={'15-05-2024'} time={'9:30 A.M. to 4:30 P.M.'} venue={'Sushrut Bhavan'} className="w-[50vw]"/>
    </div>
    
  )
}

export default EventSidebar