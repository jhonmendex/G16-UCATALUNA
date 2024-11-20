import DataAccess from "../dataAccess/dataAccess.js";

const dataAccess = new DataAccess();
const COLLECTION = "editorial";
(async () => {
  await dataAccess.connect();
})();

const listEditorial = async () => {
  const data = await dataAccess.findAll(COLLECTION);
  return data;
};

const createEditorial = async (body) => {
  const data = await dataAccess.save(COLLECTION, body);
  return data;
};

const updateEditorial = async (id, body) => {
  const data = await dataAccess.update(COLLECTION, id, body);
  return data;
};

const deleteEditorial = async (id) => {
  const data = await dataAccess.delete(COLLECTION, id);
  return data;
};

export default {
  listEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
