import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const num = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      <h1>{num}</h1>
      {renderedBooks}
    </div>
  );
}

export default BookList;
