import { Router } from "express";
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/userContoller.js";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.js";
import {
  isExistEmail,
  isExistUserId,
  isValidRole,
} from "../helpers/validatorsDb.js";

export const router = Router();

router.get("/", userGet);

router.put(
  "/:id",
  [
    check("id", "It is not a valid ID").isMongoId(),
    check("id").custom(isExistUserId),
    check("rol").custom(isValidRole),
    validateFields,
  ],
  userPut
);

router.post(
  "/",
  [
    check("name", "Invalid name").not().isEmpty(),
    check(
      "password",
      "The password must contain more than 6 letters!"
    ).isLength({
      min: 6,
    }),
    check("email", "Invalid email").isEmail(),
    check("email").custom(isExistEmail),
    check("rol").custom(isValidRole),
    validateFields,
  ],
  userPost
);

router.patch("/", userPatch);

router.delete(
  "/:id",
  [
    check("id", "It is not a valid ID").isMongoId(),
    check("id").custom(isExistUserId),
    validateFields,
  ],
  userDelete
);
