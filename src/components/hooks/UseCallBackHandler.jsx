import { useState, useCallback, useEffect } from "react";

function UseHookHandler() {
  const [count, setCount] = useState(0);

  const someFunction = useCallback(() => {
    console.log("someFunction", count);
  }, [count]);

  useEffect(() => {
    console.log("someFunction 이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button type="button" onClick={someFunction}>
        someFunction
      </button>
    </div>
  );
}

export default UseHookHandler;
