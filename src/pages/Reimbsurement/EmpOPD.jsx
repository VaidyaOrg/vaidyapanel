import React from 'react'
import Header from "../../components/Layout/Main/Header";
import Loader from "../../components/Layout/Loader";
import Footer from "../../components/Layout/Main/Footer";
import Form1 from '../../components/Reimbursment/Forms/Form1';
import { useSelector } from "react-redux";

const EmpOPD = () => {
    const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
    {isLoading ? (
      <Loader />
    ) : (
      <div>
        <Header activeHeading={1} />
        <Form1/>
        <Footer/>
      </div>
    )}
  </>
  )
}

export default EmpOPD;