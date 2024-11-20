import bookService from "../services/bookService.js";

const listBook = async (req, res) => {
  const data = await bookService.listBook();
  res.json(data);
};

const createBook = async (req, res) => {
  const body = req.body;
  const data = await bookService.createBook(body);
  res.json(data);
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await bookService.updateBook(id, body);
  res.json(data);
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  const data = await bookService.deleteBook(id);
  res.json(data);
};

export default { listBook, createBook, updateBook, deleteBook };
