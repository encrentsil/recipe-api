import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

//Create router
const recipeRouter = Router();

//Define
recipeRouter.get('/recipes', (req,res) => {
    res.json('All recipes');
});

recipeRouter.post('/recipes', async (req,res) => {
    //Add reipe to database
    await RecipeModel.create(req.body);
    //Return response
    res.json('Recipe added');
});

recipeRouter.patch('/recipes/:id', (req,res) => {
    res.json(`Recipe with ID ${req.params.id} updated`);
});

recipeRouter.delete('/recipes/:id', (req,res) => {
    res.json(`Recipe with ID ${req.params.id} deleted`);
});

recipeRouter.get('/recipes/:id', (req,res) => {
    res.json(`Recipe with ID ${req.params.id} received` );
});
//Export router
export default recipeRouter;