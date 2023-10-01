import { Router } from "express";
import { check } from "express-validator";
import { login } from "../controllers/authController.js";
import { validateFields } from "../middlewares/validateFields.js";

export const auth = Router();

auth.post(
  "/login",
  [
    check("email", "Email is mandatory").isEmail(),
    check("password", "The password must contain more than 6 letters!")
      .not()
      .isEmpty(),
    validateFields,
  ],
  login
);
