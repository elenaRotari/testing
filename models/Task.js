import mongoose from "mongoose";
const TaskSchema = mongoose.Schema({
  content: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", TaskSchema, "tasks");
