<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import ViewLoanComponent from './components/viewloan';
import EditProfileComponent from './components/editprofile';
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Assuming LandingPage is in the correct directory
import Login from './components/login'; // Adjust the path as necessary
import AppAppBar from './components/AppAppBar';
import Register from './components/Register'
>>>>>>> 55cd44d13ce7dacebc12b0946980e379ccc2e750

function App() {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
<<<<<<< HEAD
    <div className="App">
        <ViewLoanComponent/>
        <EditProfileComponent/>
    </div>
=======
    <BrowserRouter>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Define more routes as needed */}
      </Routes>
    </BrowserRouter>
>>>>>>> 55cd44d13ce7dacebc12b0946980e379ccc2e750
  );
}

export default App;
