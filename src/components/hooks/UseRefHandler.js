import { useState, useRef } from "react";

function UseHookHandler() {
  const [count, setCount] = useState(1);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button type="button" onClick={handleCountUpdate}>
        Update
      </button>
      <span>count: {count}</span>
    </div>
  );
}

export default UseHookHandler;
