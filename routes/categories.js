import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.js";
import { validateJWT } from "../middlewares/validateJWT.js";

const categories = Router();

//#region GET ALL CATERGORIES - public API
categories.get("/", (req, res) => {
  res.json("ENTRE GET ALL CATERGORIES");
});
//#endregion

//#region GET A CATEGORY BY ID - public API
categories.get("/:id", (req, res) => {
  res.json("ENTRE GET A CATEGORY");
});
//#endregion

//#region POST CREATE A CATEGORY BY ID - valid token
categories.post(
  "/",
  [
    validateJWT,
    check("name", "The name is required!").not().isEmpty(),
    validateFields,
  ],
  (req, res) => {
    res.json("ENTRE POST CREATE A CATEGORY");
  }
);
//#endregion

//#region PUT UPDATE BY ID - valid token
categories.put("/:id", (req, res) => {
  res.json("ENTRE PUT BY ID");
});
//#endregion

//#region DETELE A CATEGORY - admin role
categories.delete("/:id", (req, res) => {
  res.json("ENTRE DELETE A CATEGORY");
});
//#endregion

export { categories };
