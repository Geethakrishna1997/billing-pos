import { Link, Route } from 'react-router-dom'
// import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/users/register'>Register</Link>
      <Link to='/users/login'>Login</Link>

      <Route path='/' component={Home} exact={true} />
      <Route path='/users/register' component={Register} />
      <Route path='/users/login' component={Login}  />
      
    </div>
  );
}

export default App;
