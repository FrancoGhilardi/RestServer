import { Role } from "../models/role.js";
import { Usuario } from "../models/usuario.js";

/**
 * Check if the role exists
 * @param rol                String
 * @return Returns an error if the role does not exist
 */
export const isValidRole = async (rol = "") => {
  const existRol = await Role.findOne({ rol });
  if (!existRol) throw new Error(`Role '${rol}' does not exist!`);
};

/**
 * Check if the email exists
 * @param email                String
 * @return Returns an error if the email already exists
 */
export const isExistEmail = async (email = "") => {
  const existEmail = await Usuario.findOne({ email });
  if (existEmail) throw new Error(`The email '${email}' already exists!`);
};

/**
 * Check if the ID exists
 * @param id                String
 * @return Returns an error if the ID already exists
 */
export const isExistUserId = async (id) => {
  const existId = await Usuario.findById(id);
  if (!existId) throw new Error(`The ID '${id}' already exists!`);
};
