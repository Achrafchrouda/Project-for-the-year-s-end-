import './App.css';
import React, {useState,useEffect} from 'react'
import Home from './components/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/loader'
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import Register from './components/pages/register';
import Client from './components/pages/Client';



function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    },3000)

  },[])
  return loader === true ? (
          <Loader />
  ) :
   (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route  path="/login" component={Login} />
        <Route  path="/register" component={Register} />
        <Route 
        exact 
        path="/admin" 
        component={ Admin}  
        /> 
        <Route 
        exact 
        path="/client" 
        component={ Client}  
        /> 
      </Switch>
    </Router>
  );
}

export default App;
