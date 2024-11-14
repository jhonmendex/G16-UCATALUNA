import DataAccess from "../dataAccess/dataAccess.js";

const dataAccess = new DataAccess();
const COLLECTION = "user";
(async () => {
  await dataAccess.connect();
})();

const listUser = async () => {
  const data = await dataAccess.findAll(COLLECTION);
  console.log(data);
};
/*
const createUser = () => {
  res.json({ mensaje: "create user" });
};

const updateUser = () => {
  res.json({ mensaje: "update user" });
};

const deleteUser = () => {
  res.json({ mensaje: "delete user" });
}; */

listUser();
