import React from 'react';
import Book from '../Books/Book';

function Listofbooks() {
  const Books = [
    {
      id: 1,
      title: 'The Hunger Game',
      category: 'Action',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Divergent',
      category: 'Action',
      author: 'Veronica Roth',
    },
    {
      id: 3,
      title: 'The Alchemist',
      category: 'Action',
      author: 'Paulo Coelho',
    },
  ];

  return (
    <div className="Books">
      {Books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          category={book.category}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default Listofbooks;
