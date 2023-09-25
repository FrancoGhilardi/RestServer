import { response, request } from "express";
import { MyModel } from "../models/usuario.js";
import bcryptjs from "bcryptjs";

//#region METHODS GET
const userGet = (req = request, res = response) => {
  const { name } = req.query;
  res.json({ Message: "GET controller", name });
};
//#endregion

//#region METHODS PUT
const userPut = (req, res = response) => {
  const id = req.params.id;
  res.status(400).json({ Message: "PUT controller", id });
};
//#endregion

//#region METHODS POST
const userPost = async (req, res = response) => {
  const { name, email, password, rol } = req.body;

  const usuario = new MyModel({ name, email, password, rol });

  //Verificar si el correo existe

  //Encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar usuario en la base de datos
  await usuario.save();
  res.status(201).json({ Message: "POST controller", usuario });
};
//#endregion

//#region METHODS DELETE
const userDelete = (req, res = response) => {
  res.json({ Message: "DELETE controller" });
};
//#endregion

//#region METHODS PATCH
const userPatch = (req, res = response) => {
  res.json({ Message: "PATCH controller" });
};
//#endregion

export { userGet, userPut, userPost, userDelete, userPatch };
