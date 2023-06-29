import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BooksContext from './context/books';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BooksContext.Provider value={10}>
    <App />
  </BooksContext.Provider>
);
