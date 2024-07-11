import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";


export const register = async (req, res, next) => {
   try {
      //Hash user password
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
   
      //Create a new user
      await UserModel.create({
       ...req.body,
       password: hashedPassword
      });
   
      //Return Response
      res.status(201).json('User registered successfully');
   } catch (error) {
      next(error)
   }
}

export const login = async (req, res, next) => {
  try {
    const{email, username, phone, password} = req.body;
     //Find a user using their unique identifier
     const user = await UserModel.findOne({
       $or:[
         {email: email},
         {username: username},
         {phone: phone},
       ]
     });
     if(!user){
       return res.status(401).json('No user found')
     }else{
       
       //Verify their password
       const correctPassword = bcrypt.compareSync(req.body.password, user.password);//or await bcrypt.compare
       
       if(!correctPassword) {
          res.status(401).json('Invalid credentials');
       }else{
          //Generate a session
          req.session.user = {id: user.id}//something unique that will help locate user
          //Return response
          res.status(200).json('Login successful')
       }
     }   
  } catch (error) {
   next(error)
  }
}

export const logout = async(req, res, next) => {
try {
   //Destroy user session
   await req.session.destroy();
   //Return response
   res.status(200).json('Logout succesfully')
} catch (error) {
   next(error)
}
}

export const profile = async(req, res, next) => {
  try {
    //Find a user by id
    const user = await UserModel
    .findById(req.session.user.id)
    .select({ password: false });
    //Return
    res.status(200).json(user)
  } catch (error) {
   next(error)
  }
}
