import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe.js";

//Create router
const recipeRouter = Router();

//Define
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipes);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

//Export router
export default recipeRouter;