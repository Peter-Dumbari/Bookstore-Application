import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
