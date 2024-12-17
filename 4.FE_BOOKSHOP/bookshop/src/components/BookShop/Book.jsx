import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import BookService from "../../services/BookService.js";

const Book = () => {
  // Estado para almacenar los libros
  const [books, setBooks] = useState([
    {
      _id: "",
      name: "",
      year: "",
    },
  ]);

  const [open, setOpen] = useState(false); // Estado para abrir/cerrar el formulario
  const [isEdit, setIsEdit] = useState(false); // Verificar si es edición o creación
  const [currentBook, setCurrentBook] = useState({
    _id: "",
    name: "",
    year: "",
  });

  useEffect(() => {
    getBooks();
  }, []);

  // Funciones CRUD
  // consultar libros
  const getBooks = async () => {
    const response = await BookService.getBooks();
    setBooks(response.data);
  };

  // Crear un libro nuevo
  const handleCreate = () => {
    setBooks([...books, { ...currentBook, _id: Date.now().toString() }]);
    handleClose();
  };

  // Actualizar un libro existente
  const handleUpdate = () => {
    setBooks(
      books.map((book) => (book._id === currentBook._id ? currentBook : book))
    );
    handleClose();
  };

  // Eliminar un libro
  const handleDelete = (_id) => {
    setBooks(books.filter((book) => book._id !== _id));
  };

  // Abrir el formulario para agregar o editar
  const handleOpen = (book = { _id: "", name: "", year: "" }) => {
    setIsEdit(!!book._id); // Si hay un ID, es edición
    setCurrentBook(book);
    setOpen(true);
  };

  // Cerrar el formulario
  const handleClose = () => {
    setOpen(false);
    setCurrentBook({ _id: "", name: "", year: "" });
  };

  return (
    <>
      <h2>Book Management</h2>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Book
      </Button>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book._id}>
                <TableCell>{book._id}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.year}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpen(book)}
                    style={{ marginRight: 10 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog para Crear/Editar */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEdit ? "Edit Book" : "Add Book"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={currentBook.name}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Year"
            fullWidth
            value={currentBook.year}
            onChange={(e) =>
              setCurrentBook({ ...currentBook, year: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={isEdit ? handleUpdate : handleCreate}
            color="primary"
            variant="contained"
          >
            {isEdit ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Book;
