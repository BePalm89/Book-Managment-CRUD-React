import {useNavigate, useParams} from "react-router-dom";
import BookForm from "../bookForm/BookForm";
import React, { useContext } from 'react';
import BooksContext from "../../context/BooksContext";

const EditBook = () => {
    const id = useParams();
    const navigate = useNavigate();
    const { books, setBooks } = useContext(BooksContext);
    const bookToEdit = books.find((book) => book.id === id.id);

    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter((book) => book.id !== id.id);
        setBooks([book, ...filteredBooks])
        navigate('/')
    }


    return <div>
        <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit}/>
    </div>
}

export default EditBook;
