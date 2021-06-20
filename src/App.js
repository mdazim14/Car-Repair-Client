import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Contact from './components/Contact/Contact';
// import Book from './components/Dashboard/Book/Book';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Navigationbar from './components/Home/Navigationbar/Navigationbar';


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
      <Navigationbar></Navigationbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard/bookService">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
