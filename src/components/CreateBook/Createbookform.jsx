import React, { useState } from 'react';
import './Createbookform.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';
import Buttons from '../Buttons/Button';

function Createbookform() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const id = uuidv4();
  const formData = {
    item_id: id,
    title,
    author,
    category,
  };

  const handleSubmit = async () => {
    if (title !== '' || author !== '' || category !== '') {
      dispatch(addBook(JSON.stringify(formData)));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div className="form-container">
      <h1>Add Book</h1>
      <form className="addbook_form">
        <div className="input_container">
          <input
            type="text"
            placeholder="Book title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.selectedOptions[0].value)}
            value={category}
          >
            <option value="Category">Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </div>
        <Buttons
          title="Add Book"
          onclick={() => {
            handleSubmit();
          }}
          newStyle="newStyle"
        />
      </form>
    </div>
  );
}

export default Createbookform;
