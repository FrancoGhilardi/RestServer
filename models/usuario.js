import { Schema, model } from "mongoose";

const UsuarioSchema = Schema({
  name: {
    type: String,
    required: [true, "This name is obligatory"],
  },
  email: {
    type: String,
    required: [true, "This email is obligatory"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "This password is obligatory"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: [true, "This rol is obligatory"],
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});
export const MyModel = model("Usuario", UsuarioSchema);
