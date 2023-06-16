import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Button';

function Book({
  key, title, category, author,
}) {
  return (
    <div className="book_container" key={key}>
      <div className="book_inner_container">
        <div className="functionalities">
          <span className="category">{category}</span>
          <h3 className="book_title">{title}</h3>
          <span className="author">{author}</span>
          <div className="functions">
            <Buttons title="Comments" />
            <Buttons title="Remove" />
            <Buttons title="Edit" />
          </div>
        </div>
        <div className="percentage_display">
          <div className="percentage_innercontainer">
            <div className="Oval-2" />
            <div className="text-container">
              <h3 className="percentage">64%</h3>
              <span className="completed">Completed</span>
            </div>
          </div>
        </div>
        <div className="current_chapter">
          <span className="current">CURRENT CHAPTER</span>
          <span className="chapter">Chapter 17</span>
          <Buttons title="UPDATE PROGRESS" />
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
