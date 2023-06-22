import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Books/Book';
import Loader from '../Loader/Loader';

function Listofbooks() {
  const { books, loading } = useSelector((state) => state.books);
  console.log(books);

  return (
    <div className="Books">
      {loading ? (
        <Loader />
      ) : (
        books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            category={book.category}
            author={book.author}
          />
        ))
      )}
    </div>
  );
}

export default Listofbooks;
