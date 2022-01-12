import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import CreateLogin from "./components/CreateLogin/CreateLogin";
import Destination from "./components/Destination/Destination";
import SearchDestination from "./components/SearchDestination/SearchDestination";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/create">
            <CreateLogin></CreateLogin>
          </Route>
          <Route path="/destination/research/:name">
            <SearchDestination></SearchDestination>
          </Route>
          <Route path="/destination/:name">
            <Destination></Destination>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
