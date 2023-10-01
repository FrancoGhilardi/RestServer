import { request, response } from "express";
import jwt from "jsonwebtoken";
import { Usuario } from "../models/usuario.js";

const validateJWT = async (req = request, res = response, next) => {
  const token = req.headers.authorization;
  const secretPrivateKey = process.env.SECRETPRIVATEKEY;

  if (!token)
    return res.status(401).json({
      Message: "There is no token in the request!",
    });

  try {
    const { uid } = jwt.verify(token, secretPrivateKey);

    //Read the user that corresponds to the uid
    const usuario = await Usuario.findById(uid);

    //Check if the user exists
    if (!usuario)
      return res.status(401).json({
        Message: "Non-existent user in DB!",
      });

    //Check if the uid has true status
    if (!usuario.state)
      return res.status(401).json({
        Message: "Invalid token - user with status: false",
      });

    req.usuario = usuario;
    next();
  } catch (error) {
    console.log({ error });
    res.status(401).json({
      Message: "Invalid token!",
    });
  }
};

export { validateJWT };
