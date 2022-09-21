import './App.css';
import {NavLink,Route,Routes} from 'react-router-dom'

import Home from './components/Home';
import Login from './components/Login';
import SignUP from './components/SignUp';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">SignUP</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
      <h1>homepage</h1>
    </div>
  );
}

export default App;
