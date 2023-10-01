import { response, request } from "express";
import { Usuario } from "../models/usuario.js";
import bcryptjs from "bcryptjs";

//#region METHODS GET
const userGet = async (req = request, res = response) => {
  const { limit = 5, start = 0 } = req.query;
  const filterResult = { state: true };

  const [Data, Total] = await Promise.all([
    Usuario.find(filterResult).skip(Number(start)).limit(Number(limit)),
    Usuario.countDocuments(filterResult),
  ]);

  res.json({ Data, Total });
};
//#endregion

//#region METHODS PUT
const userPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...data } = req.body;

  //TODO:Validate against database
  if (password) {
    //Encrypt password
    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, data);

  res.json({ usuario });
};
//#endregion

//#region METHODS POST
const userPost = async (req, res = response) => {
  const { name, email, password, rol } = req.body;

  const usuario = new Usuario({ name, email, password, rol });

  //Encrypt password
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Save user to database
  await usuario.save();
  res.status(201).json({ usuario });
};
//#endregion

//#region METHODS DELETE
const userDelete = async (req, res = response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByIdAndUpdate(id, { state: false });
  const authenticatedUser = req.usuario;

  res.json({ usuario });
};
//#endregion

//#region METHODS PATCH
const userPatch = (req, res = response) => {
  res.json({ Message: "PATCH controller" });
};
//#endregion

export { userGet, userPut, userPost, userDelete, userPatch };
