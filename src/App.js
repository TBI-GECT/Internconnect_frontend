import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register';
import Adminpanel from './components/Adminpanel';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />
        <Route path="/adminpanel" element={<Adminpanel/>}/>
      </Routes>
    </Router>

  );
}

export default App;
