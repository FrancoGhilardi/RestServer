import { Schema, model } from "mongoose";

const CategoriesSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is required!"],
  },
  state: {
    type: Boolean,
    default: true,
    required: true,
  },
  usuarios: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

export const Categoria = model("Categoria", CategoriesSchema);
