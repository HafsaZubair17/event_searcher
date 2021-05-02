import React, { useState } from "react";
import Header from "./Components/Views/HeaderView";
import Carousels from "./Components/Views/CarouselView";
import Artist from "./Components/Views/ArtistView";
import EventDisplay from "./Components/Views/Event/EventDisplayView";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from "react-bootstrap/Spinner";

// Begin Main App
function App() {
  const [artistData, setArtistData] = useState("");
  const [initial, setInitial] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [eventInitial, setEventInitial] = useState(false);
  const [eventData, setEventData] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventLoading, setEventLoading] = useState(false);

  return (
    console.log(eventData),
    (
      <div className="App">
        <header>
          <Header
            setArtistData={setArtistData}
            setInitial={setInitial}
            setEventInitial={setEventInitial}
            setArtistName={setArtistName}
            setLoading={setLoading}
          />
          <Carousels />
          {initial ? (
            !loading ? (
              <>
                <hr></hr>
                <Artist
                  artistData={artistData}
                  artistName={artistName}
                  setEventInitial={setEventInitial}
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
                <hr></hr>
                <EventDisplay eventData={eventData} />
              </>
            ) : (
              <div className="d-flex justify-content-center">
                <Spinner className="spinner" animation="grow" variant="dark" />
              </div>
            )
          ) : null}
        </header>
      </div>
    )
  );
}

export default App;
