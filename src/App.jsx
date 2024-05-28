import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Coin from "./Pages/Coin";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";
import { useState } from "react";
const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };
  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className="app">
      <Navbar onSignUpClick={handleSignUpClick} />
      {showSignUp && <SignUp onClose={handleCloseSignUp} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
