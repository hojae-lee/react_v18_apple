import { useState } from "react";
import UploadButton from "../UploadButton";

function UseStateUpload() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <article>
      <h2>UseState 를 사용한 예제</h2>
      <input type="text" value={input} onChange={handleInputChange} />
      <UploadButton val={input} />
    </article>
  );
}

export default UseStateUpload;
