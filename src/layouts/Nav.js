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
        <li>
          <Link to="/useHook">useHook</Link>
        </li>
      </ol>
    </nav>
  );
}

export default Nav;
