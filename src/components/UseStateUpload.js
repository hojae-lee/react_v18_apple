import { useState } from "react";
import UploadButton from "./UploadButton";

function UseStateUpload() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <UploadButton val={input} />
    </div>
  );
}

export default UseStateUpload;
