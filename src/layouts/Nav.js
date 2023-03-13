import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useState">useState</Link>
        </li>
      </ol>
    </nav>
  );
}

export default Nav;
