import BookForm from "../bookForm/BookForm";

import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react';
import BooksContext from "../../context/BooksContext";

const NewBook = () => {
  const navigate =  useNavigate();
  const { books, setBooks } = useContext(BooksContext);
  const handleOnSubmit = (book) => {
    setBooks([...books, book]);
    navigate('/');
  }

  return <div>
    <BookForm handleOnSubmit={handleOnSubmit}/>
  </div>;
};

export default NewBook;
