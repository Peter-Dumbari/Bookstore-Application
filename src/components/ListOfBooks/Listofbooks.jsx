import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Books/Book';
import './Listofbooks.css';
import { ReactComponent as EmptyIcon } from '../Loader/empty.svg';

function Listofbooks() {
  const { books } = useSelector((state) => state.books);
  console.log(books);

  return (
    <div className="Books">
      {Object.keys(books).length === 0 ? (
        <div className="empty_container">
          <div className="empty_inner_container">
            <EmptyIcon />
          </div>
        </div>
      ) : (
        Object.entries(books).map(([id, book]) => book.map((bookItem) => (
          <Book
            key={id}
            id={id}
            title={bookItem.title}
            category={bookItem.category}
            author={bookItem.author}
          />
        )))
      )}
    </div>
  );
}

export default Listofbooks;
