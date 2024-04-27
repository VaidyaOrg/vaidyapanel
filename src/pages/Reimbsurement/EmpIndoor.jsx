import React from 'react'
import Header from "../../components/Layout/Main/Header";
import Loader from "../../components/Layout/Loader";
import Footer from "../../components/Layout/Main/Footer";
import Form2 from '../../components/Reimbursment/Forms/Form2';
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
        <Form2/>
        <Footer/>
      </div>
    )}
  </>
  )
}

export default EmpIndoor;