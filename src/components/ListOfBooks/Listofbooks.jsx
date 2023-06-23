import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Books/Book';
import Loader from '../Loader/Loader';

function Listofbooks() {
  const { books, loading } = useSelector((state) => state.books);

  return (
    <div className="Books">
      {loading ? (
        <Loader />
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
