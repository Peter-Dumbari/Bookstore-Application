import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Books/Book';

function Listofbooks() {
  const { books } = useSelector((state) => state.books);

  return (
    <div className="Books">
      {books.map((book) => (
        <Book
          key={book.item_id}
          itemid={book.item_id}
          title={book.title}
          category={book.category}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default Listofbooks;
