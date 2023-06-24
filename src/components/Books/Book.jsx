import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Buttons from '../Buttons/Button';
import { removeBook } from '../../redux/books/booksSlice';

function Book({
  id, title, category, author,
}) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.books);

  return (
    <div className="book_container" key={id}>
      <div className="book_inner_container">
        <div className="functionalities">
          <span className="category">{category}</span>
          <h3 className="book_title">{title}</h3>
          <span className="author">{author}</span>
          <div className="functions">
            <Buttons title="Comments" disabled />
            <div className="demacation" />
            <Buttons
              title="Remove"
              loading={loading}
              onclick={() => dispatch(removeBook(id))}
            />
            <div className="demacation" />
            <Buttons title="Edit" disabled />
          </div>
        </div>
        <div className="percentage_display">
          <div className="percentage_innercontainer">
            <div className="progress-bar">
              <div className="progresss" />
            </div>
            <div className="text-container">
              <h3 className="percentage">64%</h3>
              <span className="completed">Completed</span>
            </div>
          </div>
        </div>
        <div className="big_demacation" />
        <div className="current_chapter">
          <span className="current">CURRENT CHAPTER</span>
          <span className="chapter">Chapter 17</span>
          <Buttons title="UPDATE PROGRESS" newStyle="newStyle" />
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
