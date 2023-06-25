import { useState } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import "./App.css";

import Login from "./Components/Login";
import Users from "./Components/Users";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  console.log(loggedIn);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !loggedIn ? (
                <Login onlogin={handleLogin} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/home"
            element={
              loggedIn ? <Users onLogout={handleLogout} /> : <Navigate to="/" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
