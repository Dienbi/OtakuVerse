import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup"; // Import SignUp component
import Login from "./pages/Login"; // Import Login component
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} /> {/* Added signup route */}
          <Route path="/login" element={<Login />} /> {/* Added login route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
