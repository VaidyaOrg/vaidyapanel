import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";
import styles from "../styles/styles";
const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }} className={`d-flex justify-content-center pt-20 ${styles.heading}`}>
            
          <h1 className="texthead leading-relaxed font-[600]">
          Upcoming{" "}
          <span className="bg-opacity rounded-md text-[#fff] bg-[#49B9C8] px-1 py-1">
            Events
          </span>
        </h1>
        </div>
          <EventCard active={true} data={allEvents && allEvents[0]} />
          <Footer></Footer>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default EventsPage
