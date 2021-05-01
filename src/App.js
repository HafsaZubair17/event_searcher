import Header from "./Components/Views/Header";
import Carousels from "./Components/Views/Carousel";
import Artist from "./Components/Views/Artist";
import EventDisplay from "./Components/Views/EventDisplay";

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Carousels/>
        <Artist/>
        <EventDisplay/>
      </header>
    </div>
  );
}

export default App;
