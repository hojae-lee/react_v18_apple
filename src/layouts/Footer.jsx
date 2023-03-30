import { useState, useContext } from "react";
import { ThemeContext } from "../components/hooks/UseContextHandler";
import Timer from "../components/Timer";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  return (
    <footer
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h2>copyright</h2>
      <button type="Button" onClick={() => setIsDark(!isDark)}>
        색상 변경
      </button>
      <div>
        {show && <Timer />}
        <button type="button" onClick={() => setShow(!show)}>
          Toggle Timer
        </button>
      </div>
    </footer>
  );
}

export default Footer;
