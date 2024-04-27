import React from 'react'
import Header from "../../components/Layout/Main/Header";
import Loader from "../../components/Layout/Loader";
import Footer from "../../components/Layout/Main/Footer";
import AppointmentComponent from '../../components/Appointement/Appointment';
import { useSelector } from "react-redux";

const Appointment = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <div>
        <Header activeHeading={3} />
        <AppointmentComponent />
        <Footer/>
      </div>
    )}
  </>
  )
}

export default Appointment;