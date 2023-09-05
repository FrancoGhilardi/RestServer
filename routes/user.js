import { Router } from "express";
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/userContoller.js";

export const router = Router();

router.get("/", userGet);

router.put("/:id", userPut);

router.post("/", userPost);

router.patch("/", userPatch);

router.delete("/", userDelete);
