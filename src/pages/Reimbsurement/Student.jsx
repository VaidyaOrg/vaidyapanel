import React from 'react'
import Header from "../../components/Layout/Main/Header";
import Loader from "../../components/Layout/Loader";
import Footer from "../../components/Layout/Main/Footer";
import Form3 from '../../components/Reimbursment/Forms/Form3';
import { useSelector } from "react-redux";

const Student = () => {
    const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <div>
        <Header activeHeading={1} />
        <Form3/>
        <Footer/>
      </div>
    )}
  </>
  )
}

export default Student;