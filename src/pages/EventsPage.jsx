import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";
import Events from "../components/Events/Events";
const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <Events />
          <Footer/>
        </div>
      )}
    </>
  );
};

export default EventsPage
