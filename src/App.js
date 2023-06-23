import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbars/Navbar';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import './App.css';
import { getBooks } from './redux/books/booksSlice';
import BaseAPI from './redux/baseurl';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTokenAndFetchBooks = async () => {
      const storedToken = localStorage.getItem('token');
      if (!storedToken) {
        const response = await axios.post(`${BaseAPI}`);
        const token = response.data;
        localStorage.setItem('token', token);
        window.location.reload(); // Reload the page
        dispatch(getBooks());
      } else {
        dispatch(getBooks());
      }
    };

    getTokenAndFetchBooks();
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
