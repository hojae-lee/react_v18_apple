import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import NotFound from "./layouts/404";
import Contents from "./layouts/home/Contents";
import UseStateInfo from "./layouts/sample/UseStateInfo";

function App() {
  return (
    <BrowserRouter>
      <Header title="REACT_WEB" />
      <Nav />
      <Routes>
        <Route path="/" element={<Contents />}></Route>
        <Route path="/useState" element={<UseStateInfo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
