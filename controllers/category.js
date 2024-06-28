import { CategoryModel } from "../models/category.js";

export const getCategories = async (req,res,next) => {
    try {
        //Get all Categories
        const allCategories = await CategoryModel.find();
        //Return response
        res.status(200).json(allCategories);
    } catch (error) {
      next(error)
    }
}

export const postCategory = async (req,res,next) => {
    
        try {
            const newCategory = await CategoryModel.create(req.body);
           res.status(201).json(newCategory)
        } catch (error) {
            next (error)
        }
    
}