import { Request, Response } from "express";
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequestsException } from "../exceptions/bad-requests";
import { ErrorCodes } from "../exceptions/root";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });

  if (user) {
    throw new BadRequestsException("user not found", ErrorCodes.USER_NOT_FOUND);
  }

  user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });

  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });

  if (!user) {
    throw Error("User does not exist");
  }

  // kondisi jika password tidak sesuai
  if (!compareSync(password, user.password)) {
    throw Error("Incorrect password!");
  }

  // generate token
  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET,
  );
  res.json({ user, token });
};
