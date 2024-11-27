import userService from "../services/userService.js";
import jwt from "jsonwebtoken";

const listUser = async (req, res) => {
  //validar la cookie
  const data = await userService.listUser();
  res.json(data);
};

const loginUser = async (req, res) => {
  const body = req.body;
  const data = await userService.loginUser(body);
  res
    .cookie("access_token", data, {
      httpOnly: false,
      secure: false,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .send({ message: "success" });
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
