import React from 'react';
import Listofbooks from '../ListOfBooks/Listofbooks';
import Createbookform from '../CreateBook/Createbookform';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <Listofbooks />
      <Createbookform />
    </div>
  );
}

export default Home;
