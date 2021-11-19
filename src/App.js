import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
