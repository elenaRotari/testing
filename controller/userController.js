import Task from "../models/Task.js";

export const getAll = async (req, res) => {
  try {
    res.status(200).send(await Task.find());
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const getOne = async (req, res) => {
  try {
    res.status(200).send(await Task.findById(req.params.id));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const postOne = async (req, res) => {
  try {
    res.status(201).send(await Task.create(req.body));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const updateOne = async (req, res) => {
  try {
    res.status(201).send(await Task.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const deleteOne = async (req, res) => {
  try {
    res.status(200).send(await Task.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
