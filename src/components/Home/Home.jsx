import React, { useEffect } from 'react';
import axios from 'axios';
import Listofbooks from '../ListOfBooks/Listofbooks';
import Createbookform from '../CreateBook/Createbookform';
import './Home.css';
import BaseAPI from '../../redux/baseurl';

function Home() {
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      axios
        .post(`${BaseAPI}`)
        .then((res) => localStorage.setItem('token', res.data))
        .catch((err) => err);
    }
  }, []);

  return (
    <div className="home-container">
      <Listofbooks />
      <Createbookform />
    </div>
  );
}

export default Home;
