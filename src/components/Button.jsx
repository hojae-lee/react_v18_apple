import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function clickHandler(event, prop) {
    event.preventDefault();
    console.log(prop);
    setCount(count + 1);
  }

  return (
    <>
      {count}
      <span className="btn-3d cyan" onClick={(e) => clickHandler(e, "click")}>
        데이터 요청
      </span>
    </>
  );
}

export default Button;
