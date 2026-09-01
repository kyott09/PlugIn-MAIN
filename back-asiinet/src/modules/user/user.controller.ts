import { Request, Response } from "express";
import * as userService from "./user.service.js";


export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const user = await userService.register(email, password, role);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await userService.login(email, password);

    res.cookie("token", result.token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 60 * 60 * 1000,
    });

    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
