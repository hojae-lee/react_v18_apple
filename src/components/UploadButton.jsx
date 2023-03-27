import { useState } from "react";

const heavyWork = () => {
  return ["홍길동", "김민수"];
};

function UploadButton({ val }) {
  const [names, setNames] = useState(heavyWork());

  function clickHandler(e) {
    e.preventDefault();
    if (!val) return alert("데이터를 입력해주세요");

    setNames((prevState) => {
      console.log(prevState);
      return [val, ...prevState];
    });
  }

  return (
    <>
      <span className="btn-3d cyan" onClick={(e) => clickHandler(e)}>
        데이터 업로드
      </span>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </>
  );
}

export default UploadButton;
