import { Request, Response } from "express";
import { prisma } from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const createToken = (id: string): string => {
  const secret = process.env.SECRET;
  if (!secret) {
    throw new Error("JWT secret is not defined");
  }

  return jwt.sign({ _id: id }, secret, { expiresIn: "3d" });
};

export const createUser = async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({
      message: "Send all required fields: name, email, password",
    });
  }

  const { name, email, password, dob } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        password: hashedPassword,
        email: email,
        dob: dob,
      },
    });

    const token = createToken(user.id);

    return res.json({
      status: "200",
      data: user,
      token: token,
      msg: "user created",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: "Send all required fields: name, email, password",
    });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Incorrect email" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = createToken(user.id);

    return res.json({
      status: "200",
      data: user,
      token: token,
      msg: "user logged in",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  return res.json({
    status: "200",
    data: users,
    msg: "users listed",
  });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return res.json({
    status: "200",
    data: user,
    msg: "user listed",
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return res.json({
    status: "200",
    data: user,
    msg: "user deleted",
  });
};
