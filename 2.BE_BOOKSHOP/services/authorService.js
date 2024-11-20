import DataAccess from "../dataAccess/dataAccess.js";

const dataAccess = new DataAccess();
const COLLECTION = "author";
(async () => {
  await dataAccess.connect();
})();

const listAuthor = async () => {
  const data = await dataAccess.findAll(COLLECTION);
  return data;
};

const createAuthor = async (body) => {
  const data = await dataAccess.save(COLLECTION, body);
  return data;
};

const updateAuthor = async (id, body) => {
  const data = await dataAccess.update(COLLECTION, id, body);
  return data;
};

const deleteAuthor = async (id) => {
  const data = await dataAccess.delete(COLLECTION, id);
  return data;
};

export default { listAuthor, createAuthor, updateAuthor, deleteAuthor };
