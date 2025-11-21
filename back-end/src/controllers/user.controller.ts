import { Request, Response } from "express";
import { createUserService } from "../services/user.service";

export async function registerUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const user = await createUserService(name, email, password);
  return res.status(201).json(user);
}
