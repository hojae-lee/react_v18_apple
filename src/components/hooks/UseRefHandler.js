import { useState, useRef } from "react";

function UseHookHandler() {
  const [render, setRender] = useState(0);
  const [count, setCount] = useState(1);
  // ref 는 변화하여도 렌더링되지 않음.
  const countRef = useRef(0);
  let countVar = 0;

  const handleReander = () => {
    setRender(render + 1);
  };

  const handleStateCountUpdate = () => {
    setCount(count + 1);
  };

  const handleRefCountUpdate = () => {
    countRef.current++;
  };

  const handleVarCountUpdate = () => {
    countVar++;
    console.log(countVar);
  };

  return (
    <div>
      <button type="button" onClick={handleReander}>
        Render
      </button>
      <button type="button" onClick={handleStateCountUpdate}>
        State Update
      </button>
      <button type="button" onClick={handleRefCountUpdate}>
        Ref Update
      </button>
      <button type="button" onClick={handleVarCountUpdate}>
        Var Update
      </button>
      <div>
        <p>count: {count}</p>
        <p>ref: {countRef.current}</p>
        <p>var: {countVar}</p>
      </div>
    </div>
  );
}

export default UseHookHandler;
