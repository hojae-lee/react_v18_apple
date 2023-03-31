import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import NotFound from "./layouts/404";
import Contents from "./layouts/home/Contents";
import UseStateInfo from "./layouts/sample/UseStateInfo";
import UseHookInfo from "./layouts/sample/UseHookInfo";
import UseRefInfo from "./layouts/sample/UseRefInfo";
import UseRefDomInfo from "./layouts/sample/UseRefDomInfo";
import UseMemoInfo from "./layouts/sample/UseMemoInfo";
import UseCallBackInfo from "./layouts/sample/UseCallBackInfo";
import { ThemeContext } from "./components/hooks/UseContextHandler";

function App() {
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
        <Route path="/useMemo" element={<UseMemoInfo />}></Route>
        <Route path="/useCallback" element={<UseCallBackInfo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Footer />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
