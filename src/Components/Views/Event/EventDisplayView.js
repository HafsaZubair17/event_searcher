import React from "react";
import Event from "./EventView";
import "../../Styles/EventDisplay.scss";

//Display Events for a given artist
const EventDisplay = ({ eventData }) => {
  const DisplayEvent = () => {
    return (
      <>
        <h1 className="heading">Events</h1>
        <h2 className="sub-heading"> {eventData.length} Events Found!🎉</h2>
        <div className="event-display">
          {eventData.map((val) => (
            <Event
              className="events"
              Country={val.venue.country}
              City={val.venue.city}
              Venue={val.venue.name}
              Date={val.datetime}
            />
          ))}
        </div>
      </>
    );
  };
  const DisplayEventMessage = () => {
    return (
      <div className="event-message">
        <h1 className="heading"> No Upcoming Events!😔 </h1>
      </div>
    );
  };
  return eventData != "" ? DisplayEvent() : DisplayEventMessage();
};
export default EventDisplay;
