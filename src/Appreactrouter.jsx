import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import useAxios from './hooks/useAxios';

const Home = () => <h2>Home Page</h2>;
const Login = () => <h2>Login Page</h2>;
const Dashboard = () => <h2>Dashboard (Protected)</h2>;

const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Protected Routes Wrapper */}
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  </Router>
  )
}

export default App