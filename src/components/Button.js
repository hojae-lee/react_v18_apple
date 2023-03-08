function Button() {
  function clickHandler(event, prop) {
    event.preventDefault();
    alert(prop);
  }

  return (
    <>
      <span className="btn-3d cyan" onClick={(e) => clickHandler(e, "click")}>
        데이터 요청
      </span>
    </>
  );
}

export default Button;
