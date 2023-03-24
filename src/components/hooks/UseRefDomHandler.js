import { useRef, useEffect } from "react";

function UseHookHandler() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button type="button">로그인</button>
    </div>
  );
}

export default UseHookHandler;
