import Header from "./Components/Views/HeaderView";
import Carousels from "./Components/Views/CarouselView";
import Artist from "./Components/Views/ArtistView";
import EventDisplay from "./Components/Views/Event/EventDisplayView";

// Begin Main App
function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Carousels/>
        {/* <hr></hr> */}
        {/* <Artist/> */}
        <hr></hr>
        <EventDisplay/>
      </header>
    </div>
  );
}

export default App;
