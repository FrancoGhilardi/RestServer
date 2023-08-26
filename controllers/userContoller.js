import { response } from "express";

const userGet = (req, res = response) => {
  res.json({ Message: "GET controller" });
};

const userPut = (req, res = response) => {
  res.status(400).json({ Message: "PUT controller" });
};

const userPost = (req, res = response) => {
  res.status(201).json({ Message: "POST controller" });
};

const userDelete = (req, res = response) => {
  res.json({ Message: "DELETE controller" });
};

const userPatch = (req, res = response) => {
  res.json({ Message: "PATCH controller" });
};

export { userGet, userPut, userPost, userDelete, userPatch };
