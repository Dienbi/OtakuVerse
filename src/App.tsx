import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup"; // Import SignUp component
import Login from "./pages/Login"; // Import Login component
import ModifyProfile from "./pages/ModifyProfile";
import ViewProfile from "./pages/ViewProfile";
import Home from "./pages/home";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />} /> {/* Added signup route */}
          <Route path="/signup" element={<SignUp />} /> {/* Added signup route */}
          <Route path="/login" element={<Login />} /> {/* Added login route */}
          <Route path="/modify-profile" element={<ModifyProfile />} />
          <Route path="/view-profile" element={<ViewProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
