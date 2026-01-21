import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

// Import ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load components
const Home = React.lazy(() => import("./components/Home"));
const FakultasList = React.lazy(() => import("./components/Fakultas/List"));
const FakultasCreate = React.lazy(() => import("./components/Fakultas/Create"));
const ProdiList = React.lazy(() => import("./components/Prodi/List"));
const ProdiCreate = React.lazy(() => import("./components/Prodi/Create"));
const MahasiswaList = React.lazy(() => import("./components/Mahasiswa/List"));
const MahasiswaCreate = React.lazy(() => import("./components/Mahasiswa/Create"));
const Login = React.lazy(() => import("./components/Login"));
const Logout = React.lazy(() => import("./components/Logout"));

function App() {
  // Ambil token dari localStorage
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/fakultas">
                  Fakultas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/prodi">
                  Prodi
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/mahasiswa">
                  Mahasiswa
                </NavLink>
              </li>

              {/* Login / Logout conditional */}
              <li className="nav-item">
                {token ? (
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/logout" element={<Logout />} />

          {/* Protected routes */}
          <Route
            path="/fakultas"
            element={
              <ProtectedRoute>
                <FakultasList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fakultas/create"
            element={
              <ProtectedRoute>
                <FakultasCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prodi"
            element={
              <ProtectedRoute>
                <ProdiList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prodi/create"
            element={
              <ProtectedRoute>
                <ProdiCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mahasiswa"
            element={
              <ProtectedRoute>
                <MahasiswaList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mahasiswa/create"
            element={
              <ProtectedRoute>
                <MahasiswaCreate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
