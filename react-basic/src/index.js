import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// js 는 생략 가능 

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render( // React와 App을 연결해주는 기능
  // <React.StrictMode> // 개발중에만 사용하는 모드 
    <App />, // 원하는 최상위 컴퍼넌트 
  // </React.StrictMode>,
  document.getElementById('root') //위치 선택
);

// reportWebVitals(); // 퍼포먼스 측정할 때 사용하는 함수 필요없음
