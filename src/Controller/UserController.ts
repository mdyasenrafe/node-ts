import express from "express";

exports.addUser = async (req: express.Request, res: express.Response) => {
  const { name, email, password } = req.body;
  try {
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};
