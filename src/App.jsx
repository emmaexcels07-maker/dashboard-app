import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { user } = useAuth(); // Your auth state

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" replace />}
        />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
