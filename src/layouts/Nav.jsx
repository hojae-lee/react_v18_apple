import { Link } from "react-router-dom";

function Nav() {
  const routes = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/useState",
      title: "useState",
    },
    {
      link: "/useHook",
      title: "useHook",
    },
    {
      link: "/useRef",
      title: "useRef",
    },
    {
      link: "/useRefDom",
      title: "useRefDom",
    },
    {
      link: "/useMemo",
      title: "useMemo",
    },
    {
      link: "/useCallBack",
      title: "useCallBack",
    },
  ];
  const temp = [];

  for (let i = 0; i < routes.length; i++) {
    temp.push(
      <li key={routes[i].title}>
        <Link to={routes[i].link}>{routes[i].title}</Link>
      </li>
    );
  }

  return (
    <nav>
      <ol>{temp}</ol>
    </nav>
  );
}

export default Nav;
