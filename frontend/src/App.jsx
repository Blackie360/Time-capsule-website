// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Reveal from "./components/Reveal";
import SignInComponent from "./components/SignIn";
import TimeCapsule from "./components/TimeCapsule";
import NotFound from "./components/NotFound ";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sign-in" element={<SignInComponent />} />
        <Route
          path="/timecapsule"
          element={
            <ProtectedRoute>
              <TimeCapsule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reveal"
          element={
            <ProtectedRoute>
              <Reveal  />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
