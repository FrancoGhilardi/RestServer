import { response } from "express";

//#region METHODS GET
const userGet = (req, res = response) => {
  res.json({ Message: "GET controller" });
};
//#endregion

//#region METHODS PUT
const userPut = (req, res = response) => {
  res.status(400).json({ Message: "PUT controller" });
};
//#endregion

//#region METHODS POST
const userPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(201).json({ Message: "POST controller", nombre, edad });
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
