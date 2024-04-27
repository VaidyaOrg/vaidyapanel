import React from 'react'
import Header from "../../components/Layout/Main/Header";
import Loader from "../../components/Layout/Loader";
import Footer from "../../components/Layout/Main/Footer";
import About from '../../components/About/About';
import { useSelector } from "react-redux";

const EmpIndoor = () => {
    const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <div>
        <Header activeHeading={1} />
        <About />
        <Footer/>
      </div>
    )}
  </>
  )
}

export default EmpIndoor;