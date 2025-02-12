import express from "express";
import { getUsers, createUser } from "../controllers/userController.js";

const router = express.Router();

//define routes
router.route('/').get(getUsers).post(createUser);

// router.get("/", getUsers);
// router.post("/", createUser);

export default router;
