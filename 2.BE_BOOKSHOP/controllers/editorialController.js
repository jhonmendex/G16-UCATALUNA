import editorialService from "../services/editorialService.js";

const listEditorial = async (req, res) => {
  const data = await editorialService.listEditorial();
  res.json(data);
};

const createEditorial = async (req, res) => {
  const body = req.body;
  const data = await editorialService.createEditorial(body);
  res.json(data);
};

const updateEditorial = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await editorialService.updateEditorial(id, body);
  res.json(data);
};

const deleteEditorial = async (req, res) => {
  const id = req.params.id;
  const data = await editorialService.deleteEditorial(id);
  res.json(data);
};

export default {
  listEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
