import DataAccess from "../dataAccess/dataAccess.js";

const dataAccess = new DataAccess();
const COLLECTION = "book";
(async () => {
  await dataAccess.connect();
})();

const listBook = async () => {
  const data = await dataAccess.findAll(COLLECTION);
  return data;
};

const createBook = async (body) => {
  const data = await dataAccess.save(COLLECTION, body);
  return data;
};

const updateBook = async (id, body) => {
  const data = await dataAccess.update(COLLECTION, id, body);
  return data;
};

const deleteBook = async (id) => {
  const data = await dataAccess.delete(COLLECTION, id);
  return data;
};

export default { listBook, createBook, updateBook, deleteBook };
