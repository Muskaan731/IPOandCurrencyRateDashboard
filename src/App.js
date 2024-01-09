import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [greeting, setGreeting] = useState('');
  return (
    <Router>
      <div className="App">
        <Navbar greeting={greeting}/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register setGreeting={setGreeting} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
