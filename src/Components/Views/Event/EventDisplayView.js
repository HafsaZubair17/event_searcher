import React from "react";
import Event from "./EventView";
import moment from "moment";
import "../../../Styles/EventDisplay.scss";

//Display Events for a given artist
const EventDisplay = ({ eventData }) => {
  // Function to display all the given events
  const DisplayEvent = () => {
    return (
      <>
        <h1 className="heading tracking-in-expand-fwd ">Events</h1>
        <h2 className="sub-heading tracking-in-expand-fwd ">
          {" "}
          {eventData.length} Events Found!🎉
        </h2>
        <div className="event-display fade-in-fwd">
          {eventData.map((val) => (
            <Event
              className="events"
              Country={val.venue.country}
              City={val.venue.city}
              Venue={val.venue.name}
              Date={moment(val.datetime).format("L")}
            />
          ))}
        </div>
      </>
    );
  };

  //Function to display message in case of no events
  const DisplayEventMessage = () => {
    return (
      <div className="event-message">
        <h1 className="heading tracking-in-expand-fwd ">
          {" "}
          No Upcoming Events!😔{" "}
        </h1>
      </div>
    );
  };
  return eventData != "" ? DisplayEvent() : DisplayEventMessage();
};
export default EventDisplay;
