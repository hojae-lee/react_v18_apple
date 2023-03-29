import { useState, useMemo } from "react";

const hardCalculate = (num) => {
  console.log("어려운 계산!");
  for (let i = 0; i < 10000000; i++) {}
  return num - 0 + 1000;
};

const easyCalculate = (num) => {
  console.log("쉬운 계산!");
  return num - 0 + 1;
};

// 함수형 컴포넌트가 렌더링된다는 것은 해당 함수를 호출한다는 것이고 그렇다면 기존의 불필요한 로직을 다 사용하게 된다.
function UseHookHandler() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // hardNumber 가 변경되어야만 해당 로직을 재사용한다.
  const hardSum = useMemo(() => hardCalculate(hardNumber), [hardNumber]);
  // easyNumber 가 변경되어야만 해당 로직을 재사용한다.
  const easySum = useMemo(() => easyCalculate(easyNumber), [easyNumber]);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(e.target.value)}
      />
      <span>+ 1000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(e.target.value)}
      />
      <span>+ 1 = {easySum}</span>
    </div>
  );
}

export default UseHookHandler;
