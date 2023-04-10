import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import BlogForm from './components/BlogForm';
import NavBar from './components/Navbar';


function App(){

  return (
    <Router>
      <NavBar/>
      <div className="cotainer">
        <Switch>
          <Route path="/" exact>
            Home Page
          </Route>
          <Route path="/blogs">
            Blog List
          </Route>
          <Route path="/blogs/create">
            <BlogForm/>
          </Route>
          <Route path="/blogs/edit">
            Blog Edit
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App; // 내보내는 문법 -> 사용할 땐 import 사용
