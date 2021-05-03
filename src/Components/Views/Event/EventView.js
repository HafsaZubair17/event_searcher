import React from "react";
import Card from "react-bootstrap/Card";
import "../../../Styles/Event.scss";

//Reusable component to Display events for the artist
const Event = ({ Venue, Country, City, Date, Button }) => {
  return (
    <Card className="event-card">
      <Card.Body>
        <Card.Title className="event-title">Event Details</Card.Title>
        <hr></hr>
        <div className="event-flex">
          <div className="geo">
            <div className="country">
              <h6>Country</h6>
              <p>{Country}</p>
            </div>
            <div className="city">
              <h6>City</h6>
              <p>{City}</p>
            </div>
          </div>
          <div className="geo2">
            <div className="venue">
              <h6>Venue</h6>
              <p>{Venue}</p>
            </div>

            <div className="date">
              <h6>Date</h6>
              <p>{Date}</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Event;
