import { useState, useEffect } from "react";

function UseHookHandler() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링 될 때마다 실행
  useEffect(() => {
    console.log("렌더링✨");
  });

  // // count 변경 될 때
  useEffect(() => {
    console.log("count 변화✨");
  }, [count]);

  // name 변경 될 때
  useEffect(() => {
    console.log("name 변화✨");
  }, [name]);

  // // 처음 마운팅!
  useEffect(() => {
    console.log("마운팅🧨");
  }, []);

  return (
    <div>
      <button type="button" onClick={handleCountUpdate}>
        Update
      </button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default UseHookHandler;
