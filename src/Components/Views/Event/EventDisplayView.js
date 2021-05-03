import React from "react";
import Button from "react-bootstrap/Button";
import Event from "./EventView";
import moment from "moment";
import "../../../Styles/EventDisplay.scss";

//Display Events for a given artist
const EventDisplay = ({ eventData, setInitial, setEventInitial }) => {
  const resetData = () => {
    //setInitial(false);
    //setEventInitial(false);
  };

  // Function to display all the given events
  const DisplayEvent = () => {
    return (
      <>
        <h1 className="heading tracking-in-expand-fwd ">Events</h1>
        <h2 className="sub-heading tracking-in-expand-fwd ">
          {" "}
          {eventData.length} Upcoming Events!🎉
        </h2>
        <div className="event-display fade-in-fwd">
          {eventData.map((val) => (
            <Event
              className="events"
              Country={val.venue.country}
              City={val.venue.city}
              Venue={val.venue.name}
              Date={moment(val.datetime).format("L")}
              // href={val.offers.url}
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
        <div className="searchButton">
          <Button
            className="searchAgain tracking-in-expand-fwd"
            onClick={resetData()}
          >
            Search Again
          </Button>
        </div>
      </div>
    );
  };
  return eventData != "" ? DisplayEvent() : DisplayEventMessage();
};
export default EventDisplay;
