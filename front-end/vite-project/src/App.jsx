import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Discover from './components/Discover';
import Article from './components/Article';
import Navbar from './components/Navbar';
import MyCalendar from './components/Calendar';
import About from './components/About';
import '../style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
