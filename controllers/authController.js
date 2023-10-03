import { response } from "express";
import { Usuario } from "../models/usuario.js";
import bcryptjs from "bcryptjs";
import { generateJWT } from "../helpers/generateJWT.js";

export const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    //Check if the email exists
    if (!usuario)
      return res
        .status(400)
        .json({ msg: "Incorrect user or password - email" });

    //Verify that the user is active
    if (!usuario.state)
      return res
        .status(400)
        .json({ msg: "Incorrect user or password - state:false" });

    //Verify password
    const validPassword = bcryptjs.compareSync(password, usuario.password);

    if (!validPassword)
      return res
        .status(400)
        .json({ msg: "Incorrect user or password - password" });

    //Generate JWT
    const token = await generateJWT(usuario.id);

    res.json({ usuario, token });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};
