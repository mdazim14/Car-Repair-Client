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


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard/book">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
