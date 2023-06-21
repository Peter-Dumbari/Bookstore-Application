import React, { useState } from 'react';
import './Createbookform.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

function Createbookform() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const formData = {
    item_id: uuidv4(),
    title,
    author,
    category,
  };

  const handleSubmit = () => {
    dispatch(addBook(JSON.stringify(formData)));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h1>Add Book</h1>
      <form className="addbook_form">
        <input
          type="text"
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.selectedOptions[0].value)}
        >
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
        </select>
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Createbookform;
