import "./App.css";
import "antd/dist/antd.css";
import Navbar from "./components/navbar/Navbar";
import ListBook from "./components/listBook/ListBook";
import NewBook from "./components/newBook/NewBook";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<ListBook />} />
          <Route path="/add" element={<NewBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
