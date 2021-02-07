import React from 'react'
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Rooms from './pages/Rooms.js';
import SingleRoom from './pages/SingleRoom.js';
import Error from './pages/Error.js';

import {Route, Switch} from 'react-router-dom'

import Navbar from './component/Navbar.js'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms/" component={Rooms}/>
    <Route  exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component = {Error}/>
    </Switch>
    
    </>
      );
}

export default App;
