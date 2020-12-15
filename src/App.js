import React,{useState} from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import {BrowserRouter,Link} from 'react-router-dom';
import './App.css';
function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const login=()=>{
    setLoggedIn(true)
  }
  const refresh=()=>{
    window.location.reload(false);
  }
  return (
    <div className="App">
      <BrowserRouter >
      <header onClick={refresh}><h1>seeda</h1>
      <div className="nav">
        
        <nav>
                <ul>
                  <Link to="/Features">
                    <li>Features</li>
                  </Link>
                  <Link to="/ABOUT">
                    <li>About</li>
                  </Link>
                  <Link to="/Roadmap">
                    <li>Roadmap</li>
                  </Link>
                  <Link to="/Pricing">
                    <li>Pricing</li>
                  </Link>
                  <li><button className="sign-up-button">{loggedIn?"LOGOUT":"SIGN UP"}</button></li>
                </ul>
              </nav>
        
        
    </div>
      </header>
      </BrowserRouter><hr/>
      <MultiStepForm login={login}/>
    </div>
  );
}

export default App;
