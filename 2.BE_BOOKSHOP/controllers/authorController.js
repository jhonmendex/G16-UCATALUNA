import authorService from "../services/authorService.js";

const listAuthor = async (req, res) => {
  const data = await authorService.listAuthor();
  res.json(data);
};

const createAuthor = async (req, res) => {
  const body = req.body;
  const data = await authorService.createAuthor(body);
  res.json(data);
};

const updateAuthor = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await authorService.updateAuthor(id, body);
  res.json(data);
};

const deleteAuthor = async (req, res) => {
  const id = req.params.id;
  const data = await authorService.deleteAuthor(id);
  res.json(data);
};

export default { listAuthor, createAuthor, updateAuthor, deleteAuthor };
