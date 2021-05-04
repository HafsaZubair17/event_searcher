import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Views/HeaderView";
import Carousels from "./Components/Views/CarouselView";
import Artist from "./Components/Views/ArtistView";
import EventDisplay from "./Components/Views/Event/EventDisplayView";
import Spinner from "react-bootstrap/Spinner";

// Begin Main App
function App() {
  const location = useRef(null);
  const [artistData, setArtistData] = useState("");
  const [initial, setInitial] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [eventInitial, setEventInitial] = useState(false);
  const [eventData, setEventData] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventLoading, setEventLoading] = useState(false);
  const locate = () => {
    location.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header>
        {/* Header Component of the page */}
        <Header
          locate={locate}
          setArtistData={setArtistData}
          setInitial={setInitial}
          setEventInitial={setEventInitial}
          setArtistName={setArtistName}
          setLoading={setLoading}
        />
        {/* Carousel Under the Header */}
        <Carousels />
        {initial ? (
          !loading ? (
            <>
              <hr></hr>
              <div ref={location}></div>
              {/* Component to display the artist */}
              <Artist
                locate={locate}
                artistData={artistData}
                artistName={artistName}
                setEventInitial={setEventInitial}
                setInitial={setInitial}
                setEventData={setEventData}
                setEventLoading={setEventLoading}
              />
            </>
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner className="spinner" animation="grow" variant="dark" />
            </div>
          )
        ) : null}

        {eventInitial ? (
          !eventLoading ? (
            <>
              <div ref={location}></div>
              <hr></hr>
              {/* Component to display the Events for the artist */}
              <EventDisplay
                id="event"
                eventData={eventData}
                setEventInitial={setEventInitial}
                setInitial={setInitial}
              />
            </>
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner className="spinner" animation="grow" variant="dark" />
            </div>
          )
        ) : null}
      </header>
    </div>
  );
}

export default App;
