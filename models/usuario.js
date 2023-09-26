import { Schema, model } from "mongoose";

export const enumRol = ["ADMIN_ROLE", "USER_ROLE"];

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
    enum: enumRol,
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

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

export const Usuario = model("Usuario", UsuarioSchema);
