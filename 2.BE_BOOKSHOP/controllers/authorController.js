import authorService from "../services/authorService.js";
import jwt from "jsonwebtoken";

const listAuthor = async (req, res) => {
  const cookie = req.cookies["access_token"];

  if (!cookie) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    const authorization = jwt.verify(cookie.token, process.env.SECRET_KEY);
    if (!authorization) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const data = await authorService.listAuthor();
    res.status(200).json(data);
  } catch (error) {}
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
