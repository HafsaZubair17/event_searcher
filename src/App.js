import React, { useState } from "react";
import Header from "./Components/Views/HeaderView";
import Carousels from "./Components/Views/CarouselView";
import Artist from "./Components/Views/ArtistView";
import EventDisplay from "./Components/Views/Event/EventDisplayView";

// Begin Main App
function App() {
  const [artistsData, setArtistsData] = useState("");
  const [artistName, setArtistName] = useState("");

  return (
    <div className="App">
      <header>
        <Header setArtistsData={setArtistsData} />
        <Carousels />
        <hr></hr>
        <Artist artistsData={artistsData} />
        <hr></hr>
        <EventDisplay />
      </header>
    </div>
  );
}

export default App;
