import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import NotificationsPage from "./pages/Notifications" // Import de la page de notifications

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<NotificationsPage />} /> {/* Ajout de la route notifications */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App