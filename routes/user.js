import { Router } from "express";
import { check } from "express-validator";
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/userContoller.js";
import { validateFields } from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";
import { containRole, isAdminRole } from "../middlewares/validateRoles.js";
import {
  isExistEmail,
  isExistUserId,
  isValidRole,
} from "../helpers/validatorsDb.js";

export const router = Router();

//#region GET
router.get("/", userGet);
//#endregion

//#region PUT
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
//#endregion

//#region POST
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
//#endregion

//#region PATCH
router.patch("/", userPatch);
//#endregion

//#region DELETE
router.delete(
  "/:id",
  [
    validateJWT,
    // isAdminRole,
    containRole("ADNIN_ROLE", "VENTAS_ROLE", "USER_ROLE"),
    check("id", "It is not a valid ID").isMongoId(),
    check("id").custom(isExistUserId),
    validateFields,
  ],
  userDelete
);
//#endregion
