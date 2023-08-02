import express from "express";
import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  updateOne,
} from "../controller/userController.js";
// set userRouter
const taskRouter = express.Router();

// set routes in root
taskRouter.route("/").get(getAll).post(postOne);

// set routes on param
taskRouter.route("/:id").get(getOne).put(updateOne).delete(deleteOne);

export default taskRouter;
