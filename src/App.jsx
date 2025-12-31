import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from "react-router-dom";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Login />} /> {/* fallback route */}
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}
<HashRouter>
  <Routes> … </Routes>
</HashRouter>

export default App;
