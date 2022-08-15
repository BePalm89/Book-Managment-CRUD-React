import "./App.css";
import "antd/dist/antd.css";
import Navbar from "./components/navbar/Navbar";
import ListBook from "./components/listBook/ListBook";
import NewBook from "./components/newBook/NewBook";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import EditBook from "./components/editBook/EditBook";
import BooksContext from "./context/BooksContext";

function App() {

    const [books, setBooks] = useLocalStorage('books', [])

    return (
    <BrowserRouter>
      <div>
        <Navbar />
        <BooksContext.Provider value={{books, setBooks}}>
        <Routes>
            <Route path="/" element={<ListBook />} exact={true}/>
            <Route path="/add" element={<NewBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="*" element={<Navigate to='/'/>} />
        </Routes>
      </BooksContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
