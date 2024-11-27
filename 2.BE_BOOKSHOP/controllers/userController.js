import userService from "../services/userService.js";

const listUser = async (req, res) => {
  const data = await userService.listUser();
  res.json(data);
};

const loginUser = async (req, res) => {
  const body = req.body;
  const data = await userService.loginUser(body);
  res.json(data);
};

const createUser = async (req, res) => {
  const body = req.body;
  const data = await userService.createUser(body);
  res.json(data);
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const data = await userService.updateUser(id, body);
  res.json(data);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const data = await userService.deleteUser(id);
  res.json(data);
};

export default { listUser, createUser, updateUser, deleteUser, loginUser };
