import { useEffect, useRef } from "react";

const Timer = (props) => {
  const mount = useRef(false);

  useEffect(() => {
    let timer = null;

    if (!mount.current) {
      mount.current = true;
    } else {
      timer = setInterval(() => {
        console.log("타이머 돌리는중!");
      }, 1000);
    }

    return () => {
      if (!!timer) {
        clearInterval(timer);
        console.log("타이머가 종료되었습니다.");
      }
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요.</span>
    </div>
  );
};

export default Timer;
