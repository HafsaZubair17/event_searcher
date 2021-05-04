import React, { useRef, useState } from "react";
import Header from "./Components/Views/HeaderView";
import Carousels from "./Components/Views/CarouselView";
import Artist from "./Components/Views/ArtistView";
import EventDisplay from "./Components/Views/Event/EventDisplayView";
import Spinner from "react-bootstrap/Spinner";

// Begin Main App
function App() {
  const eventLocation = useRef(null);
  const artistLocation = useRef(null);
  const [artistData, setArtistData] = useState("");
  const [initial, setInitial] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [eventInitial, setEventInitial] = useState(false);
  const [eventData, setEventData] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventLoading, setEventLoading] = useState(false);
  const eventLocate = () => {
    eventLocation.current.scrollIntoView({ behavior: "smooth" });
  };
  const artistLocate = () => {
    artistLocation.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header>
        {/* Header Component of the page */}
        <Header
          artistLocate={artistLocate}
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

              {/* Component to display the artist */}
              <Artist
                eventLocate={eventLocate}
                artistData={artistData}
                artistName={artistName}
                setEventInitial={setEventInitial}
                setInitial={setInitial}
                setEventData={setEventData}
                setEventLoading={setEventLoading}
              />
              <div ref={artistLocation}></div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center">
                <Spinner className="spinner" animation="grow" variant="dark" />
              </div>
            </>
          )
        ) : (
          <>
            <div ref={artistLocation}></div>
          </>
        )}

        {eventInitial ? (
          !eventLoading ? (
            <>
              <div ref={eventLocation}></div>
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
            <>
              <div className="d-flex justify-content-center">
                <Spinner className="spinner" animation="grow" variant="dark" />
              </div>
            </>
          )
        ) : (
          <div ref={eventLocation}></div>
        )}
      </header>
    </div>
  );
}

export default App;
