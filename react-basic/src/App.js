import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar from './components/Navbar';
import routes from './routes';

function App(){
  return (
    <Router>
      <NavBar/>
      <div className="container">
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact path={route.path} component={route.component} />
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App; // 내보내는 문법 -> 사용할 땐 import 사용

{/* <Route path="/" exact>
  <HomePage/>
</Route>,
<Route path="/blogs" exact>
  <ListPage/>
</Route>,
<Route path="/blogs/create" exact>
  <CreatePage/>
</Route>,
<Route path="/blogs/edit" exact>
  <EditPage/>
</Route> */}