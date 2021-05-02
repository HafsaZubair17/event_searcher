import React from 'react';
import Event from './Event';
import "../../Styles/EventDisplay.scss";


const EventDisplay=({Venue, Country, City, Date})=>{
    return(
        <>
            <h1 className="heading">Events</h1>
            <h2 className="sub-heading">5 Events Found!</h2>
            <div className="event-display">
                <Event className="events"
                    Country="Pakistan"
                    City="Islamabad"
                    Venue="Jinnah Park"
                    Date="12-01-2021"/>
                <Event className="events"
                    Country="Pakistan"
                    City="Islamabad"
                    Venue="Jinnah Park"
                    Date="12-01-2021"/>
                <Event className="events"
                    Country="Pakistan"
                    City="Islamabad"
                    Venue="Jinnah Park"
                    Date="12-01-2021"/>
                <Event className="events"
                    Country="Pakistan"
                    City="Islamabad"
                    Venue="Jinnah Park"
                    Date="12-01-2021"/>
                <Event className="events"
                    Country="Pakistan"
                    City="Islamabad"
                    Venue="Jinnah Park"
                    Date="12-01-2021"/>
            </div>
    </>
    );
    }

export default EventDisplay;
