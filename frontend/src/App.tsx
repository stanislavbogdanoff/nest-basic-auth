import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <div className="body">
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
