import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
<<<<<<< HEAD
          <EventCard active={true} data={allEvents && allEvents[0]} />
          <Footer></Footer>
=======
          {allEvents && allEvents.length > 0 ? (
            allEvents.map((event, index) => (
              <EventCard key={index} active={true} data={event} />
            ))
          ) : (
            <div>
              <p>NO CURRENT EVENTS</p>
              <p>STAY TUNED FOR MORE</p>
            </div>
          )}
>>>>>>> 27ab73c31028afeb1d4bc9ec81dc3b4b06fd8415
        </div>
      )}
      <Footer/>
    </>
  );
};

export default EventsPage
