import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import NotFound from "./layouts/404";
import Contents from "./layouts/home/Contents";
import Timer from "./components/Timer";
import UseStateInfo from "./layouts/sample/UseStateInfo";
import UseHookInfo from "./layouts/sample/UseHookInfo";
import UseRefInfo from "./layouts/sample/UseRefInfo";
import UseRefDomInfo from "./layouts/sample/UseRefDomInfo";
import { ThemeContext } from "./components/hooks/UseContextHandler";

function App() {
  const [show, setShow] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <Header title="REACT_WEB" />
      <Nav />
      <Routes>
        <Route path="/" element={<Contents />}></Route>
        <Route path="/useState" element={<UseStateInfo />}></Route>
        <Route path="/useHook" element={<UseHookInfo />}></Route>
        <Route path="/useRef" element={<UseRefInfo />}></Route>
        <Route path="/useRefDom" element={<UseRefDomInfo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <div>
        {show && <Timer />}
        <button type="button" onClick={() => setShow(!show)}>
          Toggle Timer
        </button>
      </div>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Footer />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
