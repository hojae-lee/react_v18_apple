import { useContext } from "react";
import { ThemeContext } from "../components/hooks/UseContextHandler";

function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

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
    </footer>
  );
}

export default Footer;
