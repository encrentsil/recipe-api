import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";


export const register = async (req, res, next) => {
   //Hash user password
   const hashedPassword = bcrypt.hashSync(req.body.password, 10);

   //Create a new user
   await UserModel.create({
    ...req.body,
    password: hashedPassword
   });

   //Return Response
   res.status(201).json('User registered successfully');
}

export const login = async (req, res, next) => {
    
}

