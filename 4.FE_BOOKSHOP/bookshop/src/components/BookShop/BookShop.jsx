import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Book from "./Book.jsx";
const BookShop = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/book" element={<Book />} />
        </Routes>
      </Router>
    </>
  );
};

export default BookShop;
