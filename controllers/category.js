import { CategoryModel } from "../models/category.js";

export const getCategories = async (req,res,next) => {
    try {
        //Get query params
        const {limit, skip, filter, fields} = req.query

        // Parse filter and fields (handle undefined)
    const parsedFilter = filter ? JSON.parse(filter) : {};
    
    const parsedFields = fields ? JSON.parse(fields) : {};
        
    //Get all Categories
        const allCategories = await CategoryModel
        .find(parsedFilter)
        .select(parsedFields)
        .limit(limit)
        .skip(skip);
        //Return response
        res.status(200).json(allCategories);
    } catch (error) {
      next(error)
    }
}

export const postCategory = async (req,res,next) => {
    
        try {
            //Add category to database
            const newCategory = await CategoryModel.create({...req.body,
                image: req.file.filename
            });
            //Return response
           res.status(201).json(newCategory)
        } catch (error) {
            next (error)
        }
    
}


// We use the ternary operator (condition ? valueIfTrue : valueIfFalse) to handle the undefined case for filter and fields.
// If filter or fields is undefined, we default to an empty object ({}).