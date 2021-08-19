import "./App.css";
import Navbar from "./components/layout/Navbar";
import Banner from "./components/layout/Banner";
import Movies from "./components/movies/Movies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Movies />
    </div>
  );
}

export default App;
