// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Registerpage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Homepage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
