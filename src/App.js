import React, { useState } from "react";
import Header from "./Components/Views/HeaderView";
import Carousels from "./Components/Views/CarouselView";
import Artist from "./Components/Views/ArtistView";
import EventDisplay from "./Components/Views/Event/EventDisplayView";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Begin Main App
function App() {
  const [artistData, setArtistData] = useState("");
  const [initial, setInitial] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [eventInitial, setEventInitial] = useState(false);
  const [eventData, setEventData] = useState("");
  const [loading, setLoading] = useState(false);

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
                  setLoading={setLoading}
                />
              </>
            ) : (
              <Loader />
            )
          ) : // add spinner here
          null}
          {eventInitial ? (
            !loading ? (
              <>
                <hr></hr>
                <EventDisplay eventData={eventData} />
              </>
            ) : (
              <Loader />
            )
          ) : null}
        </header>
      </div>
    )
  );
}

export default App;
