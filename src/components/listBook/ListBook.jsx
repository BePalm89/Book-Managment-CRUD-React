import Book from "../book/Book";
import _ from 'lodash';
import "./ListBook.css";
import React, { useContext } from 'react';
import BooksContext from "../../context/BooksContext";

const ListBook = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return <div className="book-list">
    {!_.isEmpty(books) ? (books.map((book) => <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook}/>)) : (<p>No books available. Please add some books</p>)}
  </div>;
};

export default ListBook;
