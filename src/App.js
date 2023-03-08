import "./App.css";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Contents from "./layouts/home/Contents";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div>
      <Header title="REACT_WEB" />
      <Nav />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
