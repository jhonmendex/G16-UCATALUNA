import DataAccess from "../dataAccess/dataAccess.js";

const dataAccess = new DataAccess();
const COLLECTION = "user";
(async () => {
  await dataAccess.connect();
})();

const listUser = async () => {
  const data = await dataAccess.findAll(COLLECTION);
  return data;
};

const createUser = async (body) => {
  const data = await dataAccess.save(COLLECTION, body);
  return data;
};

const updateUser = async (id, body) => {
  const data = await dataAccess.update(COLLECTION, id, body);
  return data;
};

const deleteUser = async (id) => {
  const data = await dataAccess.delete(COLLECTION, id);
  return data;
};

export default { listUser, createUser, updateUser, deleteUser };
