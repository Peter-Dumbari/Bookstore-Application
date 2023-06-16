import React from 'react';
import './Createbookform.css';

function Createbookform() {
  return (
    <div className="form-container">
      <h1>Add Book</h1>
      <form action="" className="addbook_form">
        <input type="text" placeholder="Book title" required />
        <input type="text" placeholder="Author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Createbookform;
