# react-basic
- 인프런 리액트 강의 스터디 

# 주의사항 
- 폴더 이름에 "&" 들어가면 모듈을 못찾는 오류 발생 

# 프로젝트 만들기 
- npx create-react-app react-basic(프로젝트 제목)

# 리액트 컴포넌트 랜더링 조건
- Hooks에 useState를 사용

# 데이터 DB에 저장 
- json-server
- npm에서 데이터베이스를 흉내내는 패키지를 설치(연습이기 떄문에)
- npm install json-server -g(g를 넣으면 다른 프로젝트에도 사용 가능)
- json-server --watch db.json (db실행 명령어)
- json-server --watch db.json --port 3001 (3001포트로 변경)

# axios 설치 
- npm i axios

# React Router 설치 
- 한 화면 안에서 여러페이지 사용하기 위해 사용
- npm install react-router-dom
- exact는 경로가 정확히 일치해야 페이지가 나타나게 설정하는 값
- Switch를 하는 이유는 Router로 경로를 타다가 맞으면 더 이상 다른 경로들을 찾지 않음