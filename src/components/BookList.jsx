import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      <h1>{count}</h1>
      <button onClick={incrementCount}>TEST</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
