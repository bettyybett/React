import React from "react"
//import './App.css';
import {Switch,Route} from 'react-router-dom';
import Login from'./pages/login';
import Register from'./pages/register';
import Home from'./pages/home';
import Antrenori from './pages/antrenori';
import Header from './components/navbar/Header';
import Foo from './components/footer/footer';

const App = () =>  {
  return (
   <>
   <Header/>
   <Switch>
     <Route exact path = '/' component = {Home}/>
     <Route exact path = '/login' component = {Login}/>
     <Route exact path = '/register' component = {Register}/>
     <Route exact path = '/antrenori' component = {Antrenori}/>
     
     
   </Switch>
  <Foo/>
   </>
  );
}

export default App;
