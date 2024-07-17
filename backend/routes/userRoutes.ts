import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  loginUser,
} from "../actions/actions";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.post("/login", loginUser);
export default router;
