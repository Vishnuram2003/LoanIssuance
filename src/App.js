import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Assuming LandingPage is in the correct directory
import Login from './components/login'; // Adjust the path as necessary
import AppAppBar from './components/AppAppBar';
import Register from './components/Register'
import EditProfileComponent from './components/editprofile';
import ViewLoanComponent from './components/viewloan';

function App() {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editprofile" element={<EditProfileComponent />} />
        <Route path="/viewmyloan" element={<ViewLoanComponent />} />

        {/* Define more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
