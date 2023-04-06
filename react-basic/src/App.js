import { useState } from 'react';

function App(){
  // let number = 1;

  //랜더링 그때 그때 할 수 있게 
  console.log('render');
  const [number, setNumber] = useState(1);
  // const [number1, setNumber1] = useState(1);
  
  // 1.함수
  // const double = (number) => {
  //   return number * 3;
  // };

  // 2.버튼 이벤트
  // const printHello = () => {
  //   console.log('hello')
  // };

  // 4. useState 사용
  const double = () => {
    // const doubledNumber = number * 2;

    // 처음 랜더링 // 간단한 문법
    setNumber((prevState) => prevState * 2); // 중요

    setNumber((prevState) => { // 업데이트 된 값이 들어옴
      return prevState * 2
    }); 

    // setNumber1(number1 * 2); // 중요 
    //랜더링이 맨 마지막 함수 실행까지 기다렸다 됨
    console.log(number);
    // console.log(number1);
    // console.log(doubledNumber); // 업데이트 된 값을 변수에 저장해서 로그출력

  };

  //3. <>대신 react.fragment 사용할 수 있음 
  return (
    <> 
      <div>{number}</div>
      <button className="btn btn-primary" onClick={double}>
        Submit
      </button>
    </>
  );
}


export default App; // 내보내는 문법 -> 사용할 땐 import 사용

