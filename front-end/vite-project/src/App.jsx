// /src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discover from './components/Discover';
import Calendar from './components/Calendar';
import About from './components/About';
import Footer from './components/Footer';
import Article from './components/Article';
import Popup from './components/Popup';
import Login from './components/Login';
import Gallery from './components/Gallery';
import { AuthProvider } from './context/AuthContext';
import './styles/main.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/calendar.css';
import './styles/about.css';
import './styles/footer.css';
import './styles/article.css';
import './styles/login.css'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <Popup /> 
      </Router>
    </AuthProvider>
  );
}

export default App;
