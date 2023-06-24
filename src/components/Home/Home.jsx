import React from 'react';
import { useSelector } from 'react-redux';
import Listofbooks from '../ListOfBooks/Listofbooks';
import Createbookform from '../CreateBook/Createbookform';
import Loader from '../Loader/Loader';
import './Home.css';

function Home() {
  const { loading } = useSelector((state) => state.books);
  return (
    <div className="home-container">
      <div className="home-inner-container">
        <Listofbooks />
      </div>
      <Createbookform />
      {loading && <Loader />}
    </div>
  );
}

export default Home;
